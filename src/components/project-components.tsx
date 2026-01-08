import Image from "next/image";
import React from "react";
import { CodeCopyButton } from "./copy-code-btn";

export const ProjectComponents = {
    // Inherit blog components for basic markdown
    img: ({
        src,
        alt,
        ...props
    }: {
        src: string;
        alt: string;
        [key: string]: unknown;
    }) => (
        <Image
            src={src}
            alt={alt}
            unoptimized
            width={800}
            height={400}
            className="rounded-lg w-full aspect-video"
            {...props}
        />
    ),
    h1: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <h1 className="mb-6 text-4xl font-bold font-montserrat" {...props}>
            {children}
        </h1>
    ),
    h2: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <h2 className="mb-4 mt-8 text-3xl font-semibold font-montserrat" {...props}>
            {children}
        </h2>
    ),
    h3: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <h3 className="mb-3 mt-6 text-2xl font-medium font-montserrat" {...props}>
            {children}
        </h3>
    ),
    p: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <p className="mb-4 leading-7 text-muted-foreground font-roboto" {...props}>
            {children}
        </p>
    ),
    ul: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <ul className="mb-4 ml-6 list-disc space-y-2 font-roboto" {...props}>
            {children}
        </ul>
    ),
    ol: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2 font-roboto" {...props}>
            {children}
        </ol>
    ),
    li: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <li className="leading-7 text-muted-foreground font-roboto" {...props}>
            {children}
        </li>
    ),
    pre: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => {
        const getTextContent = (node: React.ReactNode): string => {
            if (typeof node === "string") return node;
            if (typeof node === "number") return String(node);
            if (React.isValidElement(node)) {
                return getTextContent((node.props as { children?: React.ReactNode })?.children);
            }
            if (Array.isArray(node)) {
                return node.map(getTextContent).join("");
            }
            return "";
        };

        const codeText = getTextContent(children);

        return (
            <div className="group relative mb-6 not-prose">
                <pre
                    className="
          overflow-x-auto
          rounded-sm
          border
          bg-neutral-900
          text-neutral-100
          p-4
          text-sm
        "
                    {...props}
                >
                    {children}
                </pre>

                <CodeCopyButton code={codeText} />
            </div>
        );
    },
    code: ({
        children,
        className,
        ...props
    }: {
        children: React.ReactNode;
        className?: string;
        [key: string]: unknown;
    }) => {
        // BLOCK code (handled by rehype-highlight)
        if (className?.includes("language-")) {
            return (
                <code
                    className={`${className} block font-mono text-sm`}
                    {...props}
                >
                    {children}
                </code>
            );
        }

        // INLINE code
        return (
            <code
                className="rounded px-1.5 py-0.5 font-mono text-sm"
                {...props}
            >
                {children}
            </code>
        );
    },
    blockquote: ({
        children,
        ...props
    }: {
        children: React.ReactNode;
        [key: string]: unknown;
    }) => (
        <blockquote
            className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground"
            {...props}
        >
            {children}
        </blockquote>
    ),

    // // Project-specific components
    // Technology,
    // TechStack,
    // ProjectMeta,
    // Challenges,
    // Learnings,
};