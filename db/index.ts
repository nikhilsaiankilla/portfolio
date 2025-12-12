import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

let db: any = null;

export async function getDbInstance() {
    if (db) return db;
    const db_url = process.env.DATEBASE_URL!
    
    if (!db_url) {
        throw new Error("Database url is missing!!")
    }
    // Disable prefetch as it is not supported for "Transaction" pool mode 
    const client = postgres(db_url, { prepare: false })
    db = drizzle({ client });
    return db;
}