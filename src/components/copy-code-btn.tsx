'use client';

import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface CodeCopyButtonProps {
    code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            toast.success('Code Copied!!')
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
             toast.error('Code Failed To Copied!!')
            console.error('Failed to copy text:', err);
        }
    };

    return (
        <Button
            type="button"
            onClick={copyToClipboard}
            className="
        absolute top-3 right-3
        rounded-md
        transition-all duration-200
        cursor-pointer
        bg-transparent
        hover:bg-transparent
      "
            title={isCopied ? 'Copied!' : 'Copy code'}
        >
            {isCopied ? (
                <CopyCheck size={28} className="text-green-500" />
            ) : (
                <Copy size={28} className="text-gray-600" />
            )}
        </Button>
    );
}
