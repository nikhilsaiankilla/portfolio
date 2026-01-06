import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";

let db: NodePgDatabase<Record<string, never>> | null = null;

export const getDbInstance = async () => {
    if (db) return db;

    const dbUrl = process.env.DATABASE_URL!

    if (!dbUrl) throw new Error('Db URL is missing!!')

    db = drizzle(dbUrl);

    return db;
}