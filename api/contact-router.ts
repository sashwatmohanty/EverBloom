import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { contacts } from "@db/schema";
import { desc, eq } from "drizzle-orm";

export const contactRouter = createRouter({
  submit: publicQuery
    .input(
      z.object({
        name: z.string().min(1).max(100),
        email: z.string().email(),
        message: z.string().min(1).max(2000),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.insert(contacts).values({
        name: input.name,
        email: input.email,
        message: input.message,
      });
      return { success: true };
    }),

  list: publicQuery.query(async () => {
    const db = getDb();
    return db.select().from(contacts).orderBy(desc(contacts.createdAt)).all();
  }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(contacts).where(eq(contacts.id, input.id));
      return { success: true };
    }),
});
