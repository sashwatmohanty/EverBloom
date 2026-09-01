import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { menuItems } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const menuRouter = createRouter({
  list: publicQuery
    .input(z.object({ category: z.string().optional() }).optional())
    .query(async ({ input }) => {
      const db = getDb();
      if (input?.category && input.category !== "all") {
        return db
          .select()
          .from(menuItems)
          .where(eq(menuItems.category, input.category))
          .orderBy(desc(menuItems.createdAt))
          .all();
      }
      return db.select().from(menuItems).orderBy(desc(menuItems.createdAt)).all();
    }),

  featured: publicQuery.query(async () => {
    const db = getDb();
    return db
      .select()
      .from(menuItems)
      .where(eq(menuItems.featured, true))
      .all();
  }),

  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().optional(),
        price: z.number().positive(),
        category: z.string().min(1),
        image: z.string().optional(),
        featured: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const res = await db.insert(menuItems).values({
        name: input.name,
        description: input.description,
        price: input.price,
        category: input.category,
        image: input.image || "/everbloom/signature-coolers.jpg",
        featured: input.featured ?? false,
      }).returning();
      return res[0];
    }),

  update: publicQuery
    .input(
      z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        category: z.string().optional(),
        image: z.string().optional(),
        featured: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const { id, ...data } = input;
      await db.update(menuItems).set(data).where(eq(menuItems.id, id));
      return { success: true };
    }),

  delete: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(menuItems).where(eq(menuItems.id, input.id));
      return { success: true };
    }),
});
