"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp, List } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface TocItem {
  level: number;
  text: string;
  id: string;
}

export default function FloatingTOC({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollTop += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [open]);

  if (!items.length) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        {/* TOC Panel */}
        <div
          className={`
          absolute bottom-14 right-0 w-72 md:w-96
          bg-secondary text-gray-600 dark:text-gray-300 border border-white/10
          rounded-lg shadow-lg
          transition-all duration-300 ease-out
          left-1/2 -translate-x-1/2
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        >
          <div className="px-4 py-3 border-b border-white/10 text-sm font-semibold">
            On this page
          </div>

          <div
            ref={scrollRef}
            className="max-h-64 overflow-y-auto overscroll-contain toc-scroll px-4 py-3"
          >
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block text-gray-600 dark:text-gray-300 dark:hover:text-white hover:text-black transition"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="
          flex items-center gap-2
          bg-white text-black
          px-4 py-2 rounded-full
          shadow-2xl border border-black/40
          hover:scale-[1.02] active:scale-95 transition
        "
        >
          <List size={16} />
          <span className="text-sm font-medium">Contents</span>
          <ChevronUp
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </>
  );
}
