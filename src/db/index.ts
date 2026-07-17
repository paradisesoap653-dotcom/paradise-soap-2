import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Build a connection string from common environment variables if DATABASE_URL isn't set.
function getConnectionString(): string | undefined {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  if (process.env.POSTGRES_MAIN_URL) return process.env.POSTGRES_MAIN_URL;
  if (process.env.POSTGRESQL_URL) return process.env.POSTGRESQL_URL;
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;
  if (process.env.POSTGRS_MAIN_URL) return process.env.POSTGRS_MAIN_URL;
  // Try to construct from PGHOST/PGDATABASE/PGUSER/PGPASSWORD/PGPORT
  const host = process.env.PGHOST || process.env.PGHOST_POOLED;
  const database = process.env.PGDATABASE || process.env.PGDATABASE || process.env.PG_DB;
  const user = process.env.PGUSER || process.env.PGUSER_NAME;
  const password = process.env.PGPASSWORD || process.env.PG_PASSWORD;
  const port = process.env.PGPORT || "5432";

  if (host && database) {
    const auth = user ? `${encodeURIComponent(user)}:${encodeURIComponent(password || "")}@` : "";
    return `postgres://${auth}${host}:${port}/${database}`;
  }

  return undefined;
}

const connectionString = getConnectionString();

// Allow disabling SSL via POSTGRES_NO_SSL env var (set to "true"). By default try to use SSL but allow self-signed certs.
const disableSSL = (process.env.POSTGRES_NO_SSL || process.env.POSTGRS_NO_SSL || "").toLowerCase() === "true";

if (!connectionString) {
  // Do not crash at build time; throw helpful error at runtime when DB is actually needed.
  // We export a placeholder that will throw if used.
  const placeholder = new Proxy({}, {
    get() {
      throw new Error(
        "Database connection is not configured. Set DATABASE_URL or PGHOST/PGDATABASE/PGUSER/PGPASSWORD in environment."
      );
    },
  }) as any;

  export const db = placeholder;
} else {
  // Reuse a global Pool across lambda invocations / hot reloads to avoid exhausting connections.
  // @ts-ignore
  if (!globalThis.__paradise_pg_pool) {
    const poolConfig: any = { connectionString };
    if (!disableSSL) {
      poolConfig.ssl = { rejectUnauthorized: false };
    }
    // @ts-ignore
    globalThis.__paradise_pg_pool = new Pool(poolConfig);
  }

  // @ts-ignore
  const pool: Pool = globalThis.__paradise_pg_pool;
  export const db = drizzle(pool, { schema });
}
