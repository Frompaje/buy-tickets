ALTER TABLE "tickets" ADD COLUMN "nameTitle" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "category" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "title";