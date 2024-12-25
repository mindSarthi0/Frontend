import React from "react";
import { MessageCircle, Handshake, Users } from "lucide-react";
import { SubSection } from "@/app/components/SubSection";

export const RelationshipSection: React.FC<{
  content: Record<string, string>;
}> = ({ content }) => {
  return (
    <div className="space-y-4">
      <SubSection
        Icon={MessageCircle}
        title="Your Unique Communication Style"
        content={content["Your Unique Communication Style"] as string}
      />
      <SubSection
        Icon={Handshake}
        title="Navigating Conflicts with Ease"
        content={content["Navigating Conflicts with Ease"] as string}
      />
      <SubSection
        Icon={Users}
        title="Building Meaningful Connections"
        content={content["Building Meaningful Connections"] as string}
      />
    </div>
  );
};
