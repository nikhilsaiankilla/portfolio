"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  FileText,
  LogOut,
  Menu,
  X,
  Terminal,
  PlusCircle
} from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Providers } from "@/components/provider";

// Navigation Structure
const sidebarItems = [
  {
    category: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ]
  },
  {
    category: "Manage Content",
    items: [
      { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
      { name: "Skills", href: "/dashboard/skills", icon: Wrench },
      { name: "Resume", href: "/dashboard/resume", icon: FileText },
    ]
  },
  {
    category: "Quick Actions",
    items: [
      // Direct links to 'Add' tabs if you implement query params (e.g. ?tab=add)
      { name: "Add Project", href: "/dashboard/projects?tab=add", icon: PlusCircle },
      { name: "Add Skill", href: "/dashboard/skills?tab=add", icon: PlusCircle },
    ]
  }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/entry" });
  };

  return (
    <>
      <Providers>
        <div className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white flex">
          <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 h-screen sticky top-0 z-40">

            {/* Header / Logo */}
            <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-200 dark:border-zinc-800">
              <div className=" text-white p-1.5 rounded-lg shrink-0">
                <Terminal size={20} />
              </div>
              <span className="font-normal text-lg">Nikhil</span>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 py-6 px-4 space-y-6 overflow-y-auto">
              {sidebarItems.map((group, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    {group.category}
                  </h3>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href.split('?')[0]; // Ignore query params for active state
                      return (
                        <Link key={item.href} href={item.href}>
                          <div
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium group ${isActive
                              ? "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white"
                              }`}
                          >
                            <item.icon size={18} className={isActive ? "text-cyan-500" : "group-hover:text-cyan-500 transition-colors"} />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors text-sm font-medium"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </aside>

          {/* ================= MOBILE HEADER & CONTENT ================= */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Mobile Header */}
            <header className="md:hidden h-16 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between px-4 sticky top-0 z-30">
              <div className="flex items-center gap-2">
                <div className="bg-cyan-500 text-white p-1 rounded-md">
                  <Terminal size={18} />
                </div>
                <span className="font-bold">Dashboard</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
                <Menu size={24} />
              </Button>
            </header>

            {/* Main Page Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
              <div className="flex flex-col gap-1 border-b border-gray-200 dark:border-zinc-800 pb-6">
                <h1 className="text-3xl font-bold text-black dark:text-white font-heading">
                  Dashboard
                </h1>
              </div>
              {children}
            </main>
          </div>

          {/* ================= MOBILE SIDEBAR (DRAWER) ================= */}
          <AnimatePresence>
            {isMobileOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                />

                {/* Drawer */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-zinc-800 z-50 md:hidden flex flex-col"
                >
                  <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-zinc-800">
                    <span className="font-bold text-lg">Menu</span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                      <X size={20} />
                    </Button>
                  </div>

                  <nav className="flex-1 py-6 px-4 space-y-6 overflow-y-auto">
                    {sidebarItems.map((group, idx) => (
                      <div key={idx}>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                          {group.category}
                        </h3>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-900">
                                <item.icon size={18} />
                                <span>{item.name}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </nav>

                  <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 w-full px-3 py-3 text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg text-sm font-medium"
                    >
                      <LogOut size={18} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </Providers>
    </>
  );
}