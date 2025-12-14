'use client';

import { Copy, CopyCheck } from 'lucide-react';
import { useState } from 'react';

interface CodeCopyButtonProps {
    code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <form
            action={copyToClipboard}
            className="absolute top-3 right-3 rounded-md opacity-0 transition-all duration-200 group-hover:opacity-100 hover:cursor-pointer"
            title={isCopied ? 'Copied!' : 'Copy code'}
        >
            {isCopied ? (
                <span>
                    <CopyCheck className="h-4 w-4 text-green-500" />
                </span>
            ) : (
                <span>
                    <Copy className="h-4 w-4 text-secondary" />
                </span>
            )}
        </form>
    );
}
