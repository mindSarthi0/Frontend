import React from "react";
import { Book, Trophy, Brain } from "lucide-react";
import { SubSection } from "@/app/components/SubSection";

export const AcademicSection: React.FC<{ content: Record<string, string> }> = ({
  content,
}) => {
  return (
    <div className="space-y-4">
      <SubSection
        Icon={Book}
        title="Your Learning Style Decoded"
        content={content["Your Learning Style Decoded"] as string}
      />
      <SubSection
        Icon={Trophy}
        title="Academic Strengths to Leverage"
        content={content["Academic Strengths to Leverage"] as string}
      />
      <SubSection
        Icon={Brain}
        title="Optimizing Your Study Habits"
        content={content["Optimizing Your Study Habits"] as string}
      />
    </div>
  );
};
