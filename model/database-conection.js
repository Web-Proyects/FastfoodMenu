const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'syspass',
    port: 5432
});

module.exports = pool;