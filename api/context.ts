import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { LocalUser } from "@db/schema";
import { verifyLocalToken } from "./local-auth-router";

export type UnifiedUser = {
  id: number;
  name: string;
  email?: string;
  avatar?: string;
  role: "user" | "admin";
  authType: "local";
};

export type TrpcContext = {
  req: Request;
  resHeaders: Headers;
  localUser?: LocalUser;
  unifiedUser?: UnifiedUser;
};

export async function createContext(
  opts: FetchCreateContextFnOptions,
): Promise<TrpcContext> {
  const ctx: TrpcContext = { req: opts.req, resHeaders: opts.resHeaders };

  try {
    const token = opts.req.headers.get("x-local-auth-token");
    if (token) {
      ctx.localUser = await verifyLocalToken(token);
      if (ctx.localUser) {
        ctx.unifiedUser = {
          id: ctx.localUser.id,
          name: ctx.localUser.displayName || ctx.localUser.username,
          email: ctx.localUser.email || undefined,
          role: ctx.localUser.role as "user" | "admin",
          authType: "local",
        };
      }
    }
  } catch {
    // Local auth is optional
  }

  return ctx;
}
