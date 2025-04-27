"use client";
import "./globals.css";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-2xl">Loading...</h1>
            </main>
        );
    }

    if (!session) {
        return (
            <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-4xl font-bold mb-8">Welcome to CS391 OAuth</h1>
                <button
                    onClick={() => signIn("github", { prompt: "login" })}
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
        </main>
    );
}