import React from "react";
import { Brain } from "lucide-react";
import { Domain } from "@/app/modal";
import { DomainScoreCard } from "./DomainScoreCard";

interface PersonalityOverviewProps {
  data: Domain[];
}

export const PersonalityOverview: React.FC<PersonalityOverviewProps> = ({
  data,
}) => {
  if (data === undefined) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg animate-pulse">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
            <div className="h-3 w-64 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="w-6 h-6 text-indigo-500" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Personality Profile
          </h2>
          <p className="text-sm text-gray-500">
            Detailed breakdown of your Big Five personality traits
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((domain) => (
          <DomainScoreCard
            key={domain.name}
            domain={domain.name}
            score={domain.score}
            total={60}
            level={domain.intensity}
            subdomains={domain.subdomain}
          />
        ))}
      </div>
    </div>
  );
};
