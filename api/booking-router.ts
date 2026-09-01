import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { bookings } from "@db/schema";
import { desc, eq } from "drizzle-orm";

export const bookingRouter = createRouter({
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1).max(100),
        phone: z.string().min(5).max(20),
        date: z.string(),
        time: z.string(),
        guests: z.number().min(1).max(50),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(bookings).values({
        name: input.name,
        phone: input.phone,
        date: input.date,
        time: input.time,
        guests: input.guests,
        notes: input.notes,
      }).returning();
      return result[0];
    }),

  list: adminQuery.query(async () => {
    const db = getDb();
    return db.select().from(bookings).orderBy(desc(bookings.createdAt)).all();
  }),

  updateStatus: adminQuery
    .input(z.object({ id: z.number(), status: z.string() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.update(bookings)
        .set({ status: input.status })
        .where(eq(bookings.id, input.id))
        .returning();
      return result[0];
    }),

  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(bookings).where(eq(bookings.id, input.id));
      return { success: true };
    }),
});
