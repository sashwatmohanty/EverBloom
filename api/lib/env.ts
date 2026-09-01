import "dotenv/config";

import "dotenv/config";

function required(name: string, defaultValue: string = ""): string {
  const value = process.env[name];
  if (!value && process.env.NODE_ENV === "production") {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value || defaultValue;
}

export const env = {
  appId: required("APP_ID", "default_app_id"),
  appSecret: required("APP_SECRET", "default_secret"),
  isProduction: process.env.NODE_ENV === "production",
  databaseUrl: process.env.DATABASE_URL || "",
  kimiAuthUrl: required("KIMI_AUTH_URL", "https://auth.kimi.com"),
  kimiOpenUrl: required("KIMI_OPEN_URL", "https://open.kimi.com"),
  ownerUnionId: process.env.OWNER_UNION_ID ?? "",
};
