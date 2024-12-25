import React, { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";
import { domainDescriptions } from "../../../data/domainDescriptions";
import { SubdomainRow } from "../domain/SubdomainRow";
import { Subdomain } from "@/app/modal";

// Complete subdomain descriptions
const subdomainDescriptions: Record<string, string> = {
  // Neuroticism
  Anxiety: "Tendency to experience worry, fear, and tension",
  Anger: "Tendency to experience frustration and bitterness",
  Depression: "Tendency to experience sadness and hopelessness",
  Self_consciousness: "Sensitivity to criticism and social pressure",
  Immoderation: "Tendency to act on impulses and urges",
  Vulnerability: "Ability to handle stress and pressure",

  // Extraversion
  Friendliness: "Interest in and friendliness towards others",
  Gregariousness: "Preference for company and social interaction",
  Assertiveness: "Social ascendancy and forcefulness of expression",
  Activity_Level: "Pace of living and energy level",
  Excitement_Seeking: "Need for environmental stimulation",
  Cheerfulness: "Tendency to experience positive emotions",

  // Openness
  Imagination: "Openness to fantasy and creative thinking",
  Artistic_Interests: "Appreciation for art and beauty",
  Emotionality: "Awareness of own and others' feelings",
  Adventurousness: "Willingness to try new activities",
  Intellect: "Intellectual curiosity and interest",
  Liberalism: "Readiness to challenge authority and traditional values",

  // Agreeableness
  Trust: "Belief in the sincerity and good intentions of others",
  Morality: "Sincerity in expression and dealing with others",
  Altruism: "Active concern for others' welfare",
  Cooperation: "Willingness to compromise with others",
  Modesty: "Tendency to be humble and modest",
  Sympathy: "Tenderness for others",

  // Conscientiousness
  Self_Efficacy: "Belief in one's own competence",
  Orderliness: "Personal organization and neatness",
  Dutifulness: "Emphasis placed on fulfilling obligations",
  Achievement_Striving: "Need for personal achievement",
  Self_Discipline: "Capacity to begin and complete tasks",
  Cautiousness: "Tendency to think things through",
};

interface DomainScoreCardProps {
  domain: string;
  score: number;
  total: number;
  level: string;
  subdomains: Subdomain[];
}

export const DomainScoreCard: React.FC<DomainScoreCardProps> = ({
  domain,
  score,
  total,
  level,
  subdomains,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const domainKey = domain.toLowerCase().replace(/\s+/g, "");
  const description = domainDescriptions[domainKey];
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {domain.charAt(0).toUpperCase() + domain.slice(1)}
          </h3>
          {description && (
            <div className="relative group">
              <Info className="w-4 h-4 text-indigo-400 hover:text-indigo-600 transition-colors cursor-help" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm">{description.description}</p>
                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-indigo-600 hover:text-indigo-700 flex-shrink-0"
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="space-y-3">
        <div className="relative h-2 bg-indigo-100 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex justify-between text-sm">
          <span className="font-medium text-indigo-600">{percentage}%</span>
          <span className="text-gray-600">{level}</span>
        </div>

        {description && (
          <p className="text-sm text-gray-600 mt-2">
            {level.toLowerCase() === "high"
              ? description.highDescription
              : description.lowDescription}
          </p>
        )}
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
          <h4 className="font-medium text-gray-700 mb-2">Subdomains</h4>
          {subdomains
            .sort((a: { intensity: string }, b: { intensity: string }) => {
              const intensityOrder = {
                High: 3,
                Average: 2,
                Low: 1,
              } as const;
              return (
                (intensityOrder[b.intensity as keyof typeof intensityOrder] ??
                  0) -
                (intensityOrder[a.intensity as keyof typeof intensityOrder] ??
                  0)
              );
            })
            .map((subdomain, index) => (
              <SubdomainRow
                key={index}
                name={subdomain.name}
                score={subdomain.score}
                intensity={subdomain.intensity}
                description={subdomainDescriptions[subdomain.name]}
              />
            ))}
        </div>
      )}
    </div>
  );
};
