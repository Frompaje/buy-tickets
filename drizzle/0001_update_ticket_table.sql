ALTER TABLE "tickets" ADD COLUMN "price" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "description";--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "price_cents";