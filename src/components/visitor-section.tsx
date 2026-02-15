"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorSection = () => {
  const [visitorNo, setVisitorNo] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visitor-count");
        const json = await res.json();
        if (json?.data?.visitorCount) {
          setVisitorNo(json?.data?.visitorCount);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCount();
  }, []);

  if (!visitorNo) return null;

  return (
    <div className="w-full flex items-center justify-center py-10 border-b-2 border-gray-700/10 dark:border-gray-700/40">
      {/* Added leading-none to help with vertical centering */}
      <p className="text-sm md:text-lg text-gray-400 font-medium flex items-center gap-2 leading-none">
        {visitorNo < 100000 ? (
          <>
            You are the <VisitorBadge visitorNo={ordinal(visitorNo)} /> visitor
          </>
        ) : (
          <>
            You’re among the first{" "}
            <VisitorBadge
              visitorNo={JSON.stringify(Math.floor(visitorNo / 1000))}
            />
            k visitors
          </>
        )}
      </p>
    </div>
  );
};

export default VisitorSection;

const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]); // Fixed undefined check logic slightly
};

const VisitorBadge = ({ visitorNo }: { visitorNo: string }) => {
  return (
    <span className="flex items-center gap-2 border-b-2 border-primary py-1.5">
      <Eye size={16} className="text-primary" />
      {/* Removed text-sm so it inherits size from parent */}
      <span className="font-semibold transition-colors">{visitorNo}</span>
    </span>
  );
};
