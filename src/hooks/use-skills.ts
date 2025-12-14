"use client";

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner"; // Optional: for error alerts

// Define the type here or import it from your schema/types file
export interface SkillType {
    id: string;
    name: string;
    src: string;
    createdAt?: string;
}

export const useSkills = () => {
    const [skills, setSkills] = useState<SkillType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Wrapped in useCallback so it remains stable across renders
    const fetchSkills = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const res = await fetch('/api/skills', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!res.ok) {
                throw new Error('Failed to fetch skills');
            }

            const json = await res.json();
            setSkills(json);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Something went wrong';
            console.error(message);
            setError(message);
            // Optional: toast.error(message); 
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Initial fetch on mount
    useEffect(() => {
        fetchSkills();
    }, [fetchSkills]);

    return {
        skills,
        isLoading,
        error,
        refetch: fetchSkills // Expose this to manually trigger a refresh
    };
};