import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            const allowedEmail = "nikhilsaiankilla@gmail.com";

            // 1. If it is you, allow access (return true)
            if (user.email === allowedEmail) {
                return true;
            }

            // 2. If it is NOT you, redirect to login page with error
            // Returning a string is how you tell NextAuth to redirect
            return "/entry?error=AccessDenied";
        },
    },
    // Optional: Custom pages configuration to make sure redirects go where you expect
    pages: {
        signIn: '/entry',
        error: '/entry', // Redirects here if signIn callback returns false/string
    }
};

// --- FIX FOR "NO HTTP METHODS EXPORTED" ---
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };