import React from "react";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Compass,
  LucideIcon,
} from "lucide-react";
import { CareerSection } from "./CareerSection";
import { AcademicSection } from "./AcademicSection";
import { RelationshipSection } from "./RelationshipSection";
import { FulfillmentSection } from "./FulfillmentSection";
import { RecommendationButton } from "@/app/components/RecommendationButton";
interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  recommendations?: string[];
  recommendationType?: string;
  id: string;
  type?: "career" | "academic" | "relationship";
}

const parseContent = (content: string) => {
  if (content.startsWith("```json")) {
    content = content.replace("```json", "").replace("```", "");
  }
  const parsedContent = JSON.parse(content);
  return parsedContent;
};

const Section: React.FC<SectionProps> = ({
  title,
  icon: Icon,
  children,
  recommendations,
  recommendationType,
  id,
  type,
}) => (
  <div
    id={id}
    className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl scroll-mt-24"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-indigo-500" />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    {children}
    {recommendations && recommendationType && type && (
      <>
        <RecommendationButton
          title={recommendationType}
          recommendations={recommendations}
          type={type}
        />
      </>
    )}
  </div>
);
interface AiReport {
  id: string;
  created_at: string;
  updated_at: string;
  userId: string;
  testId: string;
  generatedContent: string;
}
export const DetailedSections: React.FC<{ aiReport: AiReport[] }> = ({
  aiReport,
}) => {
  if (!aiReport) {
    return <div></div>;
  }

  const firstReport = aiReport[0];
  const generatedContent = firstReport.generatedContent;

  const parsedContent = parseContent(generatedContent);

  const careerContent = parsedContent["Career Pathways"]?.sections;
  const academicContent = parsedContent["Academic Pathways"]?.sections;
  const relationshipContent = parsedContent["Relationship Blueprint"]?.sections;
  const fulfillmentContent = parsedContent["Path to Fulfillment"]?.sections;

  const ailoredCareerRecommendations =
    careerContent["Tailored Career Recommendations"];
  const ailoredAcademicRecommendations =
    academicContent["Recommended Fields of Study"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Section
        title="Career Pathways"
        icon={Briefcase}
        id="career"
        recommendationType="Careers"
        recommendations={ailoredCareerRecommendations}
        type="career"
      >
        <CareerSection content={careerContent} />
      </Section>
      <Section
        title="Academic Pathways"
        icon={GraduationCap}
        id="academic"
        recommendationType="Academic Fields"
        recommendations={ailoredAcademicRecommendations}
        type="academic"
      >
        <AcademicSection content={academicContent} />
      </Section>
      <Section
        title="Relationship Blueprint"
        icon={Heart}
        id="relationship"
        recommendationType="Relationship Patterns"
        type="relationship"
      >
        <RelationshipSection content={relationshipContent} />
      </Section>

      <Section title="Path to Fulfillment" icon={Compass} id="fulfillment">
        <FulfillmentSection content={fulfillmentContent} />
      </Section>
    </div>
  );
};
