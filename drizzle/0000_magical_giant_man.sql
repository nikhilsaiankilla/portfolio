CREATE TABLE "emails" (
	"email" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visitor_snapshots" (
	"date" date PRIMARY KEY NOT NULL,
	"total_visitors" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
