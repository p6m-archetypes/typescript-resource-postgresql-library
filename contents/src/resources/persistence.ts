import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { settings } from '../settings';

let _client: postgres.Sql | null = null;
let _db: ReturnType<typeof drizzle> | null = null;

export async function initResource(): Promise<void> {
  _client = postgres(settings.databaseUrl);
  _db = drizzle(_client);
}

export async function closeResource(): Promise<void> {
  if (_client) {
    await _client.end();
    _client = null;
    _db = null;
  }
}

export function getDb(): ReturnType<typeof drizzle> {
  if (!_db) throw new Error('Database not initialized');
  return _db;
}
