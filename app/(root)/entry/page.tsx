"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Terminal, Loader2, ShieldAlert, Lock, FileWarning } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useSearchParams, useRouter } from "next/navigation";
import NavSection from "@/components/nav-section";
import AnimatedContainer from "@/components/animated-container"; // Ensure this import is correct

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const error = searchParams.get("error");

    const handleLogin = async () => {
        setIsLoading(true);
        await signIn("google", { callbackUrl: "/dashboard" });
    };

    // 1. If Access Denied, show the "Stop Trying" view
    if (error === "AccessDenied") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md p-8 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 backdrop-blur-xl relative z-10 text-center"
            >
                <div className="flex flex-col items-center gap-4">
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-500">
                        <ShieldAlert size={48} />
                    </div>

                    <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">
                        Access Restricted
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        Bro, stop trying to access this page!
                        This area is strictly for the admin Nikhil only.
                    </p>

                    <Button
                        onClick={() => router.push('/')} // Go back home
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full cursor-pointer"
                    >
                        Go Back Home
                    </Button>
                </div>
            </motion.div>
        );
    }

    // 2. Normal Login View
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full max-w-md p-8 rounded-xl border border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-2xl relative z-10"
        >
            <div className="flex flex-col items-center text-center space-y-6">
                    <Terminal size={32} className="text-black dark:text-white" />

                <div className="space-y-2">
                    <h1 className="text-2xl font-bold font-heading text-black dark:text-white">
                        Admin Login
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Verify your identity to access the dashboard
                    </p>
                </div>

                <Button
                    onClick={handleLogin}
                    disabled={isLoading}
                    className="w-full py-2 text-sm font-normal bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all shadow-sm cursor-pointer"
                >
                    {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin text-cyan-500" />
                    ) : (
                        <GoogleIcon className="mr-3 h-5 w-5" />
                    )}
                    {isLoading ? "Verifying..." : "Continue with Google"}
                </Button>

                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full">
                    <Lock size={12} />
                    <span>Authorized personnel only</span>
                </div>
            </div>
        </motion.div>
    );
};

// Wrapper for Suspense
const LoginPage = () => {
    return (
        <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white px-2">
            <div className="w-full border-2 border-b-0 border-t-0 border-gray-700/10 dark:border-gray-700/40 max-w-4xl mx-auto min-h-screen flex flex-col">
                <NavSection />
                <hr className="border-gray-700/10 dark:border-gray-700/40 border-t-2 w-full" />

                <AnimatedContainer>
                    <div className="w-full min-h-[70vh] flex items-center justify-center px-4 relative">
                        <Suspense fallback={<div className="animate-pulse">Loading secure gateway...</div>}>
                            <LoginForm />
                        </Suspense>
                    </div>
                </AnimatedContainer>
            </div>
        </div>
    );
}

// Simple Google SVG Component
const GoogleIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
        />
        <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
        />
        <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
        />
        <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
        />
    </svg>
);

export default LoginPage;