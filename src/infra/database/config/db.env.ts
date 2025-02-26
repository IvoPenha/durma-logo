import { z } from 'zod';
import 'dotenv/config';

const dbEnvSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = dbEnvSchema.parse(process.env);