const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("DB connected:", result.rows);
  } catch (err) {
    console.error("DB Connection Failed: ", err);
  }
}

testConnection()

module.exports = pool;
