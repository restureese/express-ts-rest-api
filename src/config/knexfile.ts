import type { Knex } from "knex";
import dotenv from 'dotenv';
dotenv.config();
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
        host: process.env.POSTGRESQL_HOST || '127.0.0.1',
        port: Number(process.env.POSTGRESQL_PORT) || 5432,
        user: process.env.POSTGRESQL_USERNAME || 'postgres',
        password: process.env.POSTGRESQL_PASSWORD || 'postgres',
        database: process.env.POSTGRESQL_DB || 'postgres',
    },
    pool: { min: 10, max: 75 },
    migrations: {
      directory: "../database/migrations",
    },
    seeds: {
      directory: "../database/seeds",
    },

  },
};

export default config;
