import { pgTable, varchar } from 'drizzle-orm/pg-core';

export const {{ prefix_name }}s = pgTable('{{ prefix_name }}s', {
  id: varchar('id', { length: 36 }).primaryKey(),
  displayName: varchar('display_name', { length: 255 }).notNull(),
});
