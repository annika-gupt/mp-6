import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const { handlers, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    secret: process.env.AUTH_SECRET,
});