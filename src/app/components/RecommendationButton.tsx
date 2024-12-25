import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";

interface RecommendationButtonProps {
  title: string;
  recommendations: string[];
  type: "career" | "academic" | "relationship";
}

const icons = {
  career: Briefcase,
  academic: GraduationCap,
  relationship: Heart,
};

export const RecommendationButton: React.FC<RecommendationButtonProps> = ({
  title,
  recommendations,
  type,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = icons[type];

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors"
      >
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        <span>View {title} Recommendations</span>
      </button>

      {isExpanded && (
        <div className="mt-3 grid gap-2">
          {recommendations.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 p-3 bg-indigo-50/50 rounded-lg hover:bg-indigo-50 transition-colors group"
            >
              <Icon className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
