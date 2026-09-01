import { drizzle as drizzleSqlite } from "drizzle-orm/better-sqlite3";
import { drizzle as drizzleMysql } from "drizzle-orm/mysql2";
import Database from "better-sqlite3";
import mysql from "mysql2/promise";
import * as schema from "@db/schema";
import * as relations from "@db/relations";
import { env } from "../lib/env";

const fullSchema = { ...schema, ...relations };

let instance: any;

export function getDb() {
  if (!instance) {
    const dbUrl = env.databaseUrl;
    
    if (dbUrl && dbUrl.startsWith("mysql://")) {
      const connection = mysql.createPool(dbUrl);
      instance = drizzleMysql(connection, { schema: fullSchema, mode: "default" });
      console.log("Using MySQL database");
    } else {
      const database = new Database("local.db");
      instance = drizzleSqlite(database, { schema: fullSchema });
      console.log("Using SQLite database (local.db)");
    }
  }
  return instance;
}
