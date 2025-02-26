import { drizzle } from 'drizzle-orm/postgres-js';
import { createClient } from '@supabase/supabase-js'; 
import { DatabaseConnection } from './interfaces/database.interface';
import { env } from './config/db.env';

export class DrizzleConnection implements DatabaseConnection {
  private static instance: DrizzleConnection;
  private client: any;

  private constructor() {}

  public static getInstance(): DrizzleConnection {
    if (!DrizzleConnection.instance) {
      DrizzleConnection.instance = new DrizzleConnection();
    }
    return DrizzleConnection.instance;
  }

  async connect(): Promise<void> {
    if (!this.client) {
      const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);
      this.client = drizzle(supabase);
    }
  }

  async disconnect(): Promise<void> {
    this.client = null;
  }

  getClient() {
    if (!this.client) {
      throw new Error('Database not connected');
    }
    return this.client;
  }
}