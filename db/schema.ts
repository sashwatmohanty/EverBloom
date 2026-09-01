import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

// Local auth users (username/password)
export const localUsers = sqliteTable("local_users", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  displayName: text("displayName"),
  email: text("email").unique(),
  passwordHash: text("passwordHash").notNull(),
  role: text("role", { enum: ["user", "admin"] }).default("user").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Contact form submissions
export const contacts = sqliteTable("contacts", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Public message board
export const messages = sqliteTable("messages", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  content: text("content").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Table bookings
export const bookings = sqliteTable("bookings", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  guests: integer("guests").notNull(),
  notes: text("notes"),
  status: text("status").default("pending").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Menu items
export const menuItems = sqliteTable("menu_items", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").notNull(), // stored in paise (INR * 100)
  category: text("category").notNull(),
  image: text("image"),
  featured: integer("featured", { mode: "boolean" }).default(false),
  createdAt: integer("createdAt", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export type LocalUser = typeof localUsers.$inferSelect;
export type InsertLocalUser = typeof localUsers.$inferInsert;
export type Contact = typeof contacts.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type Booking = typeof bookings.$inferSelect;
export type MenuItem = typeof menuItems.$inferSelect;
