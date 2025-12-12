// app/dashboard/skills/page.tsx

"use client";

import { useEffect, useState } from "react";
import { SkillForm } from "@/components/forms/skill-form";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SkillCard from "@/components/skill-card";

export interface skillTypes {
    id: string;
    name: string;
    src: string;
    created_at: string;
}

export default function SkillsPage() {
    const [skills, setSkills] = useState<skillTypes[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch('/api/skills', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!res.ok) {
                    setError('Somehting went wrong please try again');
                    return;
                }

                const json = await res.json();

                console.log(json);

                if (json) {
                    setSkills(json);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchSkills();
    }, [])
    return (
        <div className="space-y-6 mt-5">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Skills Library</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-cyan-500 text-white hover:bg-cyan-400 cursor-pointer">
                            <Plus className="mr-2 h-4 w-4" /> Add Skill
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <SkillForm />
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Your Skills Grid/List would go here */}
            <div className="w-full flex items-start gap-3">
                {
                    skills && skills.length > 0 && skills.map((s, index) => (<SkillCard name={s?.name} src={s?.src} id={s?.id} isEdit/>))
                }
            </div>

        </div >
    );
}