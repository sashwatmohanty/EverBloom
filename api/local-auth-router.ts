import { z } from "zod";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { localUsers } from "@db/schema";
import { eq } from "drizzle-orm";
import type { LocalUser } from "@db/schema";

const JWT_SECRET = new TextEncoder().encode(process.env.APP_SECRET || "ekaiva-local-auth-secret-key-2024");

export async function createLocalToken(user: LocalUser): Promise<string> {
  return new SignJWT({ sub: String(user.id), username: user.username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export async function verifyLocalToken(token: string): Promise<LocalUser | undefined> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, { clockTolerance: 60 });
    const userId = Number(payload.sub);
    if (!userId) return undefined;
    const db = getDb();
    const user = await db.select().from(localUsers).where(eq(localUsers.id, userId)).get();
    return user || undefined;
  } catch {
    return undefined;
  }
}

export const localAuthRouter = createRouter({
  register: publicQuery
    .input(
      z.object({
        username: z.string().min(3).max(50),
        password: z.string().min(6).max(100),
        displayName: z.string().optional(),
        email: z.string().email().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const existing = await db.select().from(localUsers).where(eq(localUsers.username, input.username)).get();
      if (existing) {
        throw new Error("Username already taken");
      }
      const passwordHash = await bcrypt.hash(input.password, 12);
      const result = await db.insert(localUsers).values({
        username: input.username,
        passwordHash,
        displayName: input.displayName || input.username,
        email: input.email,
      }).returning();
      const user = result[0];
      const token = await createLocalToken(user);
      return { token, user: { id: user.id, username: user.username, name: user.displayName || user.username, role: user.role } };
    }),

  login: publicQuery
    .input(
      z.object({
        username: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const user = await db.select().from(localUsers).where(eq(localUsers.username, input.username)).get();
      if (!user) {
        throw new Error("Invalid username or password");
      }
      const valid = await bcrypt.compare(input.password, user.passwordHash);
      if (!valid) {
        throw new Error("Invalid username or password");
      }
      const token = await createLocalToken(user);
      return { token, user: { id: user.id, username: user.username, name: user.displayName || user.username, role: user.role } };
    }),

  me: publicQuery.query(async ({ ctx }) => {
    const token = ctx.req.headers.get("x-local-auth-token");
    if (!token) return null;
    const user = await verifyLocalToken(token);
    if (!user) return null;
    return { id: user.id, username: user.username, name: user.displayName || user.username, email: user.email, role: user.role };
  }),
});
