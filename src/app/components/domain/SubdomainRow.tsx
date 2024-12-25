import React from "react";
import { Info } from "lucide-react";
import { getIntensityColor } from "@/utils/intensityColors";

interface SubdomainRowProps {
  name: string;
  score?: number;
  description?: string;
  intensity: string;
}

export const SubdomainRow: React.FC<SubdomainRowProps> = ({
  name,
  description,
  intensity,
}) => {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-2">
        <span className="text-gray-700">{name}</span>
        {description && (
          <div className="relative">
            <Info className="w-4 h-4 text-gray-400 hover:text-indigo-600 transition-colors cursor-help" />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <p className="text-sm">{description}</p>
              <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </div>
        )}
      </div>
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium`}
        style={{ ...getIntensityColor(intensity) }}
      >
        {intensity}
      </span>
    </div>
  );
};
