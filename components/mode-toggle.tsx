"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Prevent hydration mismatch (Next.js server vs client mismatch)
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant="outline" size="icon" /> // Render empty placeholder during SSR
    }

    const isDark = theme === 'dark'

    return (
        <Button
            variant="outline"
            size="icon" // Makes the button a perfect square
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="relative overflow-hidden rounded-full w-10 h-10" // Rounded full looks nice for toggles
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme} // Key is vital! It tells Framer Motion the component changed
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex items-center justify-center cursor-pointer"
                >
                    {isDark ? (
                        <Moon size={18} className="text-black dark:text-white" />
                    ) : (
                        <Sun size={18} className="text-amber-600 dark:text-white" />
                    )}
                </motion.div>
            </AnimatePresence>
        </Button>
    )
}