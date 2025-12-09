import { ChevronRight, Globe } from 'lucide-react';
import { Badge } from './ui/badge';

const experiences = [
    {
        id: 1,
        company: 'Freelancer',
        role: 'Software Engineer',
        type: 'Part Time',
        date: 'Jan 2025 - Jun 2025',
        description: 'As a Software Engineer, working on full-stack development across web and mobile platforms. Building scalable applications with modern frameworks and cloud infrastructure.',
        logo: 'Globe2', // Replace with actual path
        current: false,
        logoFallback: <Globe size={20} />
    },
];

const ExperienceSection = () => {
    return (
        <section className="w-full border-b border-gray-200 dark:border-gray-800 py-10 px-5 md:px-10">
            {/* Section Header */}
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8 font-heading">
                Work Experience
            </h2>

            {/* Experience List */}
            <div className="space-y-8">
                {experiences.map((exp) => (
                    <div key={exp.id} className="group flex gap-4 md:gap-6 items-start">

                        {/* Logo Column */}
                        <div className="shrink-0 mt-1">
                            <div className="w-12 h-12 rounded-xl bg-black dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-white overflow-hidden shadow-sm">
                                {/* Use Image if available, else fallback icon */}
                                {/* <Image src={exp.logo} alt={exp.company} width={48} height={48} /> */}
                                {exp.logoFallback}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 space-y-1">

                            {/* Header Row: Company | Badge | Date */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0">
                                <div className="flex items-center flex-wrap gap-2">
                                    <h3 className="text-lg font-bold text-cyan-500">
                                        {exp.company}
                                    </h3>

                                    {/* Type Badge */}
                                    <Badge className="px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 font-medium border border-gray-200 dark:border-zinc-700 italic text-[10px]">
                                        {exp.type}
                                    </Badge>

                                    {/* Active Green Dot */}
                                    {exp.current && (
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                    )}

                                    {/* Chevron Icon from image */}
                                    <ChevronRight className="text-gray-400 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </div>

                                {/* Date */}
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tabular-nums">
                                    {exp.date}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;