import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
import { env } from './env';
dotenv.config();

export default {
  schema: './src/infrastructure/database/schema/*',
  out: './src/infrastructure/database/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  }
} satisfies Config;