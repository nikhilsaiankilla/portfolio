"use client";

import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, FolderGit2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Dummy Data (Later this will come from your database)
const projects = [
  {
    id: "1",
    title: "Dumcel Cloud",
    description: "A Vercel-like deployment platform for React apps.",
    image: "https://picsum.photos/seed/dumcel/800/400",
    status: "Open Source",
    link: "https://dumcel.com"
  },
  {
    id: "2",
    title: "Visly Analytics",
    description: "Privacy-first web analytics platform.",
    image: "https://picsum.photos/seed/visly/800/400",
    status: "Building",
    link: "https://visly.com"
  },
  {
    id: "3",
    title: "Job Nextly",
    description: "AI-powered job application tracker.",
    image: "https://picsum.photos/seed/job/800/400",
    status: "Completed",
    link: "https://jobnextly.com"
  }
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // // --- 1. Security Check ---
  // useEffect(() => {
  //   if (status === "loading") return;
  //   if (status === "unauthenticated") router.push("/entry");
  //   if (status === "authenticated" && session?.user?.email !== "nikhilsaiankilla@gmail.com") {
  //     signOut({ callbackUrl: "/entry?error=AccessDenied" });
  //   }
  // }, [status, session, router]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-cyan-500" size={32} />
      </div>
    );
  }

  // --- 2. Simple View ---
  return (
    <div className="w-full mx-auto p-6 md:p-10 space-y-8">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Area */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md rounded-md">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-black dark:text-white group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <FolderGit2 size={18} className="text-gray-400" />
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-50 dark:bg-zinc-800 hover:bg-cyan-50 dark:hover:bg-zinc-700 text-sm font-medium rounded-lg transition-colors group/btn"
              >
                <span>View Live</span>
                <ExternalLink size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}