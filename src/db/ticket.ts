import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const tickets = pgTable('tickets', {
  id: serial('id').primaryKey(),
  nameTitle: varchar('nameTitle', { length: 255 }).notNull(),
  category: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});
