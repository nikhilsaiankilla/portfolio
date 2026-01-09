export interface TocItem {
    level: number;
    text: string;
    id: string;
}

export function extractHeadings(mdx: string): TocItem[] {
    const headingRegex = /^(#{2,3})\s+(.*)$/gm;
    const toc: TocItem[] = [];

    let match;
    while ((match = headingRegex.exec(mdx)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

        toc.push({ level, text, id });
    }

    return toc;
}
