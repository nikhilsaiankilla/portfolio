"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTooltip from "./animated-tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const AvailablePrimaryColors = [
    { name: "Blue", colorCode: "0.623 0.214 259.815" },
    { name: "Indigo", colorCode: "0.585 0.225 264.376" },
    { name: "Violet", colorCode: "0.541 0.252 286.033" },
    { name: "Purple", colorCode: "0.607 0.241 292.717" },
    { name: "Teal", colorCode: "0.643 0.137 182.503" },
    { name: "Green", colorCode: "0.713 0.170 142.495" },
    { name: "Amber", colorCode: "0.769 0.188 70.080" },
    { name: "Orange", colorCode: "0.705 0.213 41.116" },
    { name: "Rose", colorCode: "0.645 0.246 16.439" },
];

const TogglePrimaryColor = () => {
    useEffect(() => {
        const saved = localStorage.getItem("primary-color");
        if (saved) {
            document.documentElement.style.setProperty(
                "--primary",
                `oklch(${saved})`
            );
        } else {
            document.documentElement.style.setProperty(
                "--primary",
                `oklch(${AvailablePrimaryColors[0].colorCode})`
            );
        }
    }, []);

    const setPrimaryColor = (value: string) => {
        document.documentElement.style.setProperty(
            "--primary",
            `oklch(${value})`
        );
        localStorage.setItem("primary-color", value);
    };

    return (
        <AnimatedTooltip label="Theme color">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        className="w-5 h-5 rounded-sm cursor-pointer bg-primary border border-primary shadow-md"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 8 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="grid grid-cols-3 gap-2 p-2 rounded-lg"
                        >
                            {AvailablePrimaryColors.map((color) => (
                                <Button
                                    key={color.name}
                                    onClick={() => setPrimaryColor(color.colorCode)}
                                    className="w-5 rounded-sm border border-black/10 hover:scale-110 transition-transform aspect-square cursor-pointer"
                                    style={{ background: `oklch(${color.colorCode})` }}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </DropdownMenuContent>
            </DropdownMenu>
        </AnimatedTooltip>
    );
};

export default TogglePrimaryColor;
