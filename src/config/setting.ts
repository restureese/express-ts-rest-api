import dotenv from 'dotenv';

dotenv.config();

interface Config {
    postgresql: {
        host: string,
        port: number,
        username: string,
        password: string,
        db: string
    },
    bearer: {
        secret: string,
        expiresIn: string
    }
}

const config: Config = {
    postgresql: {
        host: process.env.POSTGRESQL_HOST || '127.0.0.1',
        port: Number(process.env.POSTGRESQL_PORT) || 5432,
        username: process.env.POSTGRESQL_USERNAME || 'postgres',
        password: process.env.POSTGRESQL_PASSWORD || 'postgres',
        db: process.env.POSTGRESQL_DB || 'postgres',
    },
    bearer: {
        secret: process.env.JWT_SECRET || 'secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1m'
    }
}

export default config;