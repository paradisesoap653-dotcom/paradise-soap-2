import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

function getConnectionString(): string | undefined {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (process.env.POSTGRES_MAIN_URL) return process.env.POSTGRES_MAIN_URL;
  if (process.env.POSTGRESQL_URL) return process.env.POSTGRESQL_URL;
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;

  const host = process.env.PGHOST || process.env.PGHOST_POOLED;
  const database = process.env.PGDATABASE;
  const user = process.env.PGUSER;
  const password = process.env.PGPASSWORD;
  const port = process.env.PGPORT || "5432";

  if (host && database) {
    const auth = user
      ? `${encodeURIComponent(user)}:${encodeURIComponent(password || "")}`
      : "";
    return `postgres://${auth}${host}:${port}/${database}`;
  }

  return undefined;
}

const connectionString = getConnectionString();
const disableSSL =
  process.env.POSTGRES_NO_SSL === "true" || process.env.PGSSLMODE === "disable";

export let db: any;

if (!connectionString) {
  db = new Proxy(
    {},
    {
      get() {
        throw new Error(
          "Database connection is not configured. Set DATABASE_URL or related env vars."
        );
      },
    }
  );
} else {
  const poolConfig: any = { connectionString };
  if (!disableSSL) {
    poolConfig.ssl = { rejectUnauthorized: false };
  }

  // @ts-ignore
  if (!globalThis.__paradise_pg_pool) {
    // @ts-ignore
    globalThis.__paradise_pg_pool = new Pool(poolConfig);
  }

  // @ts-ignore
  const pool: Pool = globalThis.__paradise_pg_pool;
  db = drizzle(pool, { schema });
}
