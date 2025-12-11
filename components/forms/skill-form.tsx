"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Save, X } from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// --- 1. ZOD SCHEMA ---
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Skill name must be at least 2 characters.",
    }),
    src: z.string().min(1, {
        message: "Icon path is required (e.g., /next.svg).",
    }),
});

// Types
type SkillFormValues = z.infer<typeof formSchema>;

interface SkillFormProps {
    initialData?: {
        id: string;
        name: string;
        src: string;
    } | null;
    onSubmit: (data: SkillFormValues) => void;
    onCancel?: () => void;
    isLoading?: boolean;
}

export const SkillForm: React.FC<SkillFormProps> = ({
    initialData,
    onSubmit,
    onCancel,
    isLoading = false,
}) => {
    // --- 2. FORM INITIALIZATION ---
    const form = useForm<SkillFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            name: "",
            src: "",
        },
    });

    const handleSubmit = (data: SkillFormValues) => {
        onSubmit(data);
    };

    const isEditing = !!initialData;

    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold font-heading text-black dark:text-white">
                    {isEditing ? "Edit Skill" : "Add New Skill"}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {isEditing
                        ? "Update the details of this technology."
                        : "Add a new technology to your stack."}
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">

                    {/* Skill Name Field */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Skill Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Next.js"
                                        {...field}
                                        disabled={isLoading}
                                        className="bg-gray-50 dark:bg-zinc-950 border-gray-200 dark:border-zinc-800 focus-visible:ring-cyan-500"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Icon Path Field */}
                    <FormField
                        control={form.control}
                        name="src"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Icon Path / URL</FormLabel>
                                <FormControl>
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="/icons/nextjs.svg"
                                            {...field}
                                            disabled={isLoading}
                                            className="bg-gray-50 dark:bg-zinc-950 border-gray-200 dark:border-zinc-800 focus-visible:ring-cyan-500 flex-1"
                                        />
                                        {/* Tiny Preview if value exists */}
                                        {field.value && (
                                            <div className="w-10 h-10 shrink-0 rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center justify-center overflow-hidden p-1">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={field.value} alt="Preview" className="w-full h-full object-contain" />
                                            </div>
                                        )}
                                    </div>
                                </FormControl>
                                <FormDescription>
                                    Enter the public URL or local path (e.g., /icons/react.svg)
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
                        {onCancel && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onCancel}
                                disabled={isLoading}
                                className="hover:bg-gray-100 dark:hover:bg-zinc-800 border-gray-200 dark:border-zinc-700"
                            >
                                Cancel
                            </Button>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white min-w-[120px]"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    {isEditing ? "Update Skill" : "Create Skill"}
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};