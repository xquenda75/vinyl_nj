import 'dotenv/config';
import pkg from "pg";


const { Pool } = pkg;

class Database {
    constructor() {
        this.pool = new Pool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT
        });
        console.log('Host DB:' + process.env.DB_HOST);  
    }
    async query(sql) {
        return await this.pool.query(sql);
    }

    getClient() {
        return this.pool;
    }
}

export default new Database();