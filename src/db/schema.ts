import {
  integer,
  pgTable,
  date,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const visitorSnapshots = pgTable("visitor_snapshots", {
  date: date("date").primaryKey(), // one row per day (UTC or chosen TZ)
  totalVisitors: integer("total_visitors").notNull(), // cumulative count
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const newsLetterEmails = pgTable("emails", {
  email: varchar("email", { length: 255 }).primaryKey().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
