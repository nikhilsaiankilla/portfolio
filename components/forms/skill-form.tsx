"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Save, UploadCloud, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Shadcn Components
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"; 

// --- ZOD SCHEMA ---
const formSchema = z.object({
    name: z.string().min(2, { message: "Skill name must be at least 2 characters." }),
    src: z.any().optional(), // Can be string (URL) or File
});

type SkillFormValues = z.infer<typeof formSchema>;

interface SkillFormProps {
    initialData?: { id: string; name: string; src: string } | null;
    onSuccess?: () => void; // Callback to close modal/refresh
}

export const SkillForm: React.FC<SkillFormProps> = ({ initialData, onSuccess }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Use existing image URL for preview if editing
    const [preview, setPreview] = useState<string | null>(initialData?.src || null);

    const isEditing = !!initialData;

    const form = useForm<SkillFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: initialData?.name || "",
            src: initialData?.src || "",
        },
    });

    // --- HANDLE FILE SELECTION ---
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setSelectedFile(file);
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        form.clearErrors("src");
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreview(null);
        form.setValue("src", "");
    };

    // --- SUBMIT HANDLER ---
    const handleSubmit = async (data: SkillFormValues) => {
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", data.name);

            // --- LOGIC: CREATE vs UPDATE ---

            if (isEditing) {
                // UPDATE MODE
                formData.append("id", initialData.id);

                if (selectedFile) {
                    // User changed the image
                    formData.append("file", selectedFile);
                } else {
                    // User kept existing image, send the old URL
                    formData.append("src", initialData.src);
                }

                const res = await fetch("/api/skills/update", {
                    method: "POST", // or PUT depending on your API
                    body: formData,
                });

                if (!res.ok) throw new Error("Failed to update skill");
                toast.success("Skill updated successfully");

            } else {
                // CREATE MODE
                if (!selectedFile) {
                    form.setError("src", { message: "Image is required for new skills" });
                    setIsLoading(false);
                    return;
                }

                formData.append("file", selectedFile);

                const res = await fetch("/api/skills/create", {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) throw new Error("Failed to create skill");
                toast.success("Skill created successfully");
            }

            // Success cleanup
            router.refresh();
            if (onSuccess) onSuccess();

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold font-heading text-black dark:text-white">
                    {isEditing ? "Edit Skill" : "Add New Skill"}
                </h2>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">

                    {/* Skill Name */}
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
                                        className="bg-gray-50 dark:bg-zinc-950 border-gray-200 dark:border-zinc-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Image Upload Area */}
                    <FormField
                        control={form.control}
                        name="src"
                        render={() => (
                            <FormItem>
                                <FormLabel>Skill Icon</FormLabel>
                                <FormControl>
                                    <div className="space-y-4">
                                        {preview ? (
                                            <div className="relative w-24 h-24 rounded-lg border border-dashed border-gray-300 dark:border-zinc-700 flex items-center justify-center overflow-hidden group bg-gray-50 dark:bg-black">
                                                <Image
                                                    src={preview}
                                                    alt="Preview"
                                                    width={80}
                                                    height={80}
                                                    className="object-contain p-2"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleRemoveImage}
                                                    disabled={isLoading}
                                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                                >
                                                    <X size={12} />
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-zinc-800 rounded-xl cursor-pointer bg-gray-50 dark:bg-zinc-950/50 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <UploadCloud className="h-8 w-8 text-gray-400 mb-2" />
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span>
                                                    </p>
                                                    <p className="text-xs text-gray-400 dark:text-gray-500">SVG, PNG, JPG (MAX. 2MB)</p>
                                                </div>
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    disabled={isLoading}
                                                />
                                            </label>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="bg-cyan-500 hover:bg-cyan-600 text-white min-w-[120px] cursor-pointer"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="mr-2 h-4 w-4" />
                                    {isEditing ? "Update" : "Create"}
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};