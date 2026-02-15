"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "next-view-transitions";
import AnimatedTooltip from "./animated-tooltip";
import TogglePrimaryColor from "./toggle-primary-color";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
  { name: "Blogs", href: "/blogs" },
  { name: "Resume", href: "/resume" },
];

// --- Animation Variants ---
const navbarVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    height: "auto",
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    filter: "blur(10px)",
    transition: { duration: 0.2 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const NavSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const store = async () => {
      try {
        await fetch("/api/visit", { method: "POST" });
      } catch (error) {
        console.log(error);
      }
    };
    store();
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled
          ? "backdrop-blur-md"
          : "bg-transparent  border-b border-gray-200 dark:border-zinc-800"
      }  py-6`}
    >
      <div className="w-full px-5 md:px-6 flex items-center justify-between">
        <div className="flex items-end gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal size={22} />
          </Link>

          {/* --- Desktop Nav --- */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          {/* Socials (Desktop) */}
          <div className="hidden md:flex items-center gap-1 border-r border-gray-200 dark:border-zinc-800 pr-3 mr-1">
            <SocialLink
              href="https://github.com/nikhilsaiankilla"
              icon={<Github size={18} />}
              label="Github"
            />
            <SocialLink
              href="https://linkedin.com/in/nikhilsaiankilla"
              icon={<Linkedin size={18} />}
              label="Linkedin"
            />
            <SocialLink
              href="https://x.com/nikhilbuildss"
              icon={<XIcon />}
              label="X (Twitter)"
            />
            <TogglePrimaryColor />
          </div>

          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 w-full overflow-hidden md:hidden"
          >
            <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 shadow-xl px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={mobileItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-lg font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-900 text-gray-900 dark:text-gray-100 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={mobileItemVariants}
                className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-center gap-6"
              >
                <SocialLink
                  href="https://github.com/nikhilsaiankilla"
                  icon={<Github size={22} />}
                  label="Github"
                />
                <SocialLink
                  href="https://linkedin.com/in/nikhilsaiankilla"
                  icon={<Linkedin size={22} />}
                  label="Linkedin"
                />
                <SocialLink
                  href="https://x.com/nikhilbuildss"
                  icon={<XIcon className="w-5 h-5" />}
                  label="X (Twitter)"
                />
                <TogglePrimaryColor />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Helper Components
const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <AnimatedTooltip label={label}>
    <Link
      href={href}
      target="_blank"
      className="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md"
    >
      {icon}
    </Link>
  </AnimatedTooltip>
);

export const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`${className} fill-current`}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export default NavSection;
