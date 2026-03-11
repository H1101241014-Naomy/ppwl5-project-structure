import Database from "bun:sqlite";
import { env } from "./env";

export const db = new Database(env.DB_FILE || "database.sqlite");

export function initDB() {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);
}