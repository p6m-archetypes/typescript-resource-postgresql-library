import fp from 'fastify-plugin';
import type { FastifyPluginAsync } from 'fastify';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { settings } from '../settings';

declare module 'fastify' {
  interface FastifyInstance {
    db: ReturnType<typeof drizzle>;
  }
}

const persistencePlugin: FastifyPluginAsync = async (fastify) => {
  const client = postgres(settings.databaseUrl);
  const db = drizzle(client);
  fastify.decorate('db', db);
  fastify.addHook('onClose', async () => {
    await client.end();
  });
};

export default fp(persistencePlugin, { name: 'persistence' });
