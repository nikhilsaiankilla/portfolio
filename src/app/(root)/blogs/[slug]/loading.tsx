import AnimatedContainer from "@/src/components/animated-container";
import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
    return (
        <AnimatedContainer>
            <div className="w-full space-y-6 animate-pulse">
                {/* Image */}
                <Skeleton className="aspect-video w-full rounded-sm" />

                {/* Title */}
                <Skeleton className="h-8 w-2/3 rounded" />

                {/* Badges */}
                <div className="flex gap-2 flex-wrap">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            className="h-5 w-16 rounded"
                        />
                    ))}
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-5/6 rounded" />
                    <Skeleton className="h-4 w-4/6 rounded" />
                </div>
            </div>
        </AnimatedContainer>
    );
}
