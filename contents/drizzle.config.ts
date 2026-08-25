import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/persistence/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? 'postgresql://user:pass@localhost/{{ project-name }}',
  },
});
