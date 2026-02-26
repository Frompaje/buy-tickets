ALTER TABLE "tickets" ADD COLUMN "title" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "description" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "location" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "date" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "time" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "image" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "quantity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD COLUMN "max_quantity" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "nameTitle";