import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import GitHub from "next-auth/providers/github"; // Example provider
import Google from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add more providers (Google, Discord, etc.)
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Add more providers (Google, Discord, etc.)

  ],
}; 

export const getAuthSession = ()=> getServerSession(authOptions);