import { integer, pgTable, date, timestamp } from "drizzle-orm/pg-core";

export const visitorSnapshots = pgTable("visitor_snapshots", {
    date: date("date").primaryKey(), // one row per day (UTC or chosen TZ)
    totalVisitors: integer("total_visitors").notNull(), // cumulative count
    createdAt: timestamp("created_at").notNull().defaultNow(),
});
