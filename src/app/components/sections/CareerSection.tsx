import React from "react";
import { Target, Users, Lightbulb } from "lucide-react";
import { SubSection } from "@/app/components/SubSection";

export const CareerSection: React.FC<{
  content: Record<string, string>;
}> = ({ content }) => {
  return (
    <div className="space-y-4">
      <SubSection
        Icon={Target}
        title={"Ideal Roles for You"}
        content={content["Ideal Roles for You"] as string}
      />
      <SubSection
        Icon={Users}
        title="Your Perfect Work Environment"
        content={content["Your Perfect Work Environment"] as string}
      />
      <SubSection
        Icon={Lightbulb}
        title="Unlocking Professional Growth"
        content={content["Unlocking Professional Growth"] as string}
      />
    </div>
  );
};
