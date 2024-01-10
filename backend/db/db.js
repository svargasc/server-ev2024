// import mysql from 'mysql';
import { createPool } from "mysql2/promise";
import {DB_HOST, DB_USER, DB_PASWORD, DB_DATABASE, DB_PORT} from '../config.js'

export const pool = createPool(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    multipleStatements: true,
  },
  console.log("Database is connected")
);
