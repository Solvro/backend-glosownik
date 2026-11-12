import { prismaAdapter } from "@better-auth/prisma-adapter";
import { betterAuth } from "better-auth";
import { testUtils } from "better-auth/plugins";

import { prisma } from "./prisma";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  plugins: [
    ...((process.env.BETTER_AUTH_URL?.includes("localhost") ?? false)
      ? [testUtils()]
      : []),
  ],
});
