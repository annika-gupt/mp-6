"use client";
import "./globals.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-bold mb-8">CS391 OAuth</h1>
                <button
                    onClick={() => signIn("github")}
                    className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
                >
                    Sign in with GitHub
                </button>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome, {session.user?.name}</h1>
            {session.user?.image && (
                <img
                    src={session.user.image}
                    alt="Profile Picture"
                    className="rounded-full w-24 h-24 mb-4"
                />
            )}
            <p className="text-lg">{session.user?.email}</p>
            <button
                onClick={() => signOut()}
                className="mt-6 bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
            >
                Sign out
            </button>
        </main>
    );
}