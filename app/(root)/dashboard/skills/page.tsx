// app/dashboard/skills/page.tsx

"use client";

import { useState } from "react";
import { SkillForm } from "@/components/forms/skill-form";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SkillsPage() {
    const [view, setView] = useState<"list" | "form">("list");
    const [editingSkill, setEditingSkill] = useState<any>(null);

    // 1. Handle Create Click
    const handleCreate = () => {
        setEditingSkill(null); // Clear data for new entry
        setView("form");
    };

    // 2. Handle Edit Click (Pass this to your skill list item)
    const handleEdit = (skill: any) => {
        setEditingSkill(skill);
        setView("form");
    };

    // 3. Handle Submission (API Call)
    const onSubmit = async (data: any) => {
        console.log("Submitting:", data);
        // TODO: await createOrUpdateSkill(data);
        setView("list");
    };

    return (
        <div className="space-y-6">
            {view === "list" ? (
                <>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Skills Library</h1>
                        <Button onClick={handleCreate} className="bg-cyan-500 text-white">
                            <Plus className="mr-2 h-4 w-4" /> Add Skill
                        </Button>
                    </div>

                    {/* Your Skills Grid/List would go here */}
                    <div className="p-10 text-center border-2 border-dashed rounded-xl dark:border-zinc-800">
                        <p className="text-gray-500">List of skills...</p>
                        <Button variant="link" onClick={() => handleEdit({ id: "1", name: "React", src: "/react.svg" })}>
                            Test Edit Mode
                        </Button>
                    </div>
                </>
            ) : (
                <div className="max-w-xl mx-auto">
                    <SkillForm
                        initialData={editingSkill}
                        onSubmit={onSubmit}
                        onCancel={() => setView("list")}
                    />
                </div>
            )}
        </div>
    );
}