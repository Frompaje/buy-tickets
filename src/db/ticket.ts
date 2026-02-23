import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  nameTitle: varchar('title', { length: 255 }).notNull(),
  category: text('description'),
  price: integer('price_cents').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
