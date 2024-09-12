CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"desires_weekLy_frequency" integer NOT NULL,
	"created_At" timestamp with time zone DEFAULT now() NOT NULL
);
