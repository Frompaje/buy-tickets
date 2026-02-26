import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  category: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  description: varchar('description', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  date: varchar('date').notNull(),
  time: varchar('time').notNull(),
  image: varchar('image').notNull(),
  quantity: integer().notNull(),
  max_quantity: integer().notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
