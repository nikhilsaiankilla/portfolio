import AnimatedContainer from "./animated-container";
import { Github, Linkedin } from "lucide-react";
import { Link } from "next-view-transitions";
import AnimatedTooltip from "./animated-tooltip";
import { XIcon } from "./nav-section";
import SkillCard from "./skill-card";
import Image from "next/image";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatedContainer>
      <div className="space-y-5">
        <div className="flex items-center justify-center flex-wrap gap-3">
          <AnimatedTooltip label="Github">
            <Link
              href="https://github.com/nikhilsaiankilla"
              target="_blank"
              className="hover:text-primary transition-transform hover:-translate-y-1"
            >
              <Github size={20} />
            </Link>
          </AnimatedTooltip>
          <AnimatedTooltip label="Linkedin">
            <Link
              href="https://linkedin.com/in/nikhilsaiankilla"
              target="_blank"
              className="hover:text-primary transition-transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </Link>
          </AnimatedTooltip>
          <AnimatedTooltip label="X (Twitter)">
            <Link
              href="https://x.com/nikhilbuildss"
              target="_blank"
              className="hover:text-primary transition-transform hover:-translate-y-1"
            >
              <XIcon className="w-5 h-5" />
            </Link>
          </AnimatedTooltip>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Nikhil Sai. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-2">
            Built using{" "}
            <Link
              href={"https://nextjs.org/"}
              target="_blank"
              className="p-1 w-fit h-fit rounded-lg flex items-center gap-2 border border-dashed border-gray-500 dark:border-zinc-700 px-4 bg-gray-500/10 dark:hover:bg-zinc-900"
            >
              <Image
                src={"/skills/nextjs.png"}
                alt={`Icon`}
                width={20}
                height={20}
                unoptimized
                className="drop-shadow-sm"
              />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
                Next js
              </span>
            </Link>
            &
            <Link
              href={"https://tailwindcss.com/"}
              target="_blank"
              className="p-1 w-fit h-fit rounded-lg flex items-center gap-2 border border-dashed border-gray-500 dark:border-zinc-700 px-4 bg-gray-500/10 dark:hover:bg-zinc-900"
            >
              <Image
                src={"/skills/tailwind.png"}
                alt={`Icon`}
                width={20}
                height={20}
                unoptimized
                className="drop-shadow-sm"
              />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 pointer-events-none">
                Tailwind
              </span>
            </Link>
          </p>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default FooterSection;
