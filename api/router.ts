import { localAuthRouter } from "./local-auth-router";
import { contactRouter } from "./contact-router";
import { messageRouter } from "./message-router";
import { bookingRouter } from "./booking-router";
import { menuRouter } from "./menu-router";
import { chatRouter } from "./chat-router";
import { linkHubRouter } from "./link-hub-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  localAuth: localAuthRouter,
  contact: contactRouter,
  message: messageRouter,
  booking: bookingRouter,
  menu: menuRouter,
  chat: chatRouter,
  linkHub: linkHubRouter,
});

export type AppRouter = typeof appRouter;
