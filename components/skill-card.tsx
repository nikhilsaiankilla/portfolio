"use client"

import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from './ui/dialog';
import { SkillForm } from './forms/skill-form';
import { Button } from './ui/button';
import { Loader2, Trash2 } from 'lucide-react'; // Updated icons
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'; // Import useRouter

interface TooltipImageProps {
    name: string;
    src: string;
    index?: number;
    id: string;
    isEdit?: boolean;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 }
    }
};

const SkillCard = ({ name, src, id, isEdit = false }: TooltipImageProps) => {
    const router = useRouter();
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    // --- DELETE HANDLER ---
    const deleteHandler = async () => {
        if (!confirm("Are you sure you want to delete this skill?")) return;

        try {
            setIsDeleting(true);

            // 1. Send DELETE request with correct headers and stringified body
            const res = await fetch('/api/skills/delete', {
                method: 'DELETE', // Matches your API method
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const json = await res.json();

            if (!res.ok) {
                throw new Error(json.error || 'Failed to delete');
            }

            // 2. Success Actions
            toast.success('Skill deleted successfully');
            setIsOpen(false); // Close modal
            router.refresh(); // Refresh Server Components to remove item from list

        } catch (error) {
            console.error(error);
            toast.error('Something went wrong while deleting');
        } finally {
            setIsDeleting(false);
        }
    }

    // --- 1. The Card Content (Shared UI) ---
    const CardContent = (
        <motion.div
            variants={cardVariants}
            drag={!isEdit}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing", boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", zIndex: 10 }}
            whileTap={{ scale: 0.95, cursor: isEdit ? "pointer" : "grabbing" }}
            className={`
                p-1 w-fit h-fit rounded-lg 
                flex items-center gap-2 border border-dashed 
                border-gray-600 dark:border-zinc-700 px-4 
                bg-gray-500/10 dark:hover:bg-zinc-900 
                transition-colors duration-200
                relative
                ${isEdit ? "cursor-pointer hover:border-cyan-500 hover:bg-cyan-500/10" : "cursor-grab active:cursor-grabbing"}
            `}
        >
            <AnimatePresence>
                {isDragging && !isEdit && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: -45, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                        className="absolute left-1/2 -translate-x-1/2 -top-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                    >
                        <span className='text-center block leading-tight'>Put me back!! there <br /> You Stranger!</span>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-amber-500"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative flex items-center justify-center pointer-events-none">
                <Image src={src} alt={`${name} Icon`} width={20} height={20} unoptimized className="drop-shadow-sm" />
            </div>

            <span className='text-xs font-medium text-gray-700 dark:text-gray-300 pointer-events-none'>
                {name}
            </span>
        </motion.div>
    );

    // --- 2. Render Logic ---
    if (isEdit) {
        return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div className='relative inline-flex items-center justify-center'>
                        {CardContent}
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <SkillForm
                        initialData={{ id, name, src }}
                        onSuccess={() => setIsOpen(false)} // Pass success callback to close form
                    />
                    <DialogFooter className='w-full flex sm:justify-between gap-2 mt-4'>
                        <DialogClose asChild>
                            <Button variant={'outline'}>Close</Button>
                        </DialogClose>

                        <Button
                            variant="destructive"
                            onClick={deleteHandler}
                            disabled={isDeleting}
                            className="bg-red-500 hover:bg-red-600 text-white"
                        >
                            {isDeleting ? (
                                <>
                                    <Loader2 className='animate-spin w-4 h-4 mr-2' />
                                    Deleting...
                                </>
                            ) : (
                                <>
                                    <Trash2 className='w-4 h-4 mr-2' />
                                    Delete Skill
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <div className='relative inline-flex items-center justify-center'>
            {CardContent}
        </div>
    );
}

export default SkillCard;