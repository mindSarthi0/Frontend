import React from "react";
import { Star, Lightbulb, Heart } from "lucide-react";
import { SubSection } from "@/app/components/SubSection";

export const FulfillmentSection: React.FC<{
  content: Record<string, string>;
}> = ({ content }) => {
  return (
    <div className="space-y-4">
      <SubSection
        Icon={Star}
        title="Areas for Growth"
        content={content["Areas for Growth"] as string}
      />
      <SubSection
        Icon={Lightbulb}
        title="Steps Toward Fulfillment"
        content={content["Steps Toward Fulfillment"] as string}
      />
      <SubSection
        Icon={Heart}
        title="Your Core Strengths"
        content={content["Your Core Strengths"] as string}
      />
    </div>
  );
};
