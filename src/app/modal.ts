interface Subdomain {
  name: string;
  score: number;
  intensity: string;
}

interface Domain {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  score: number;
  subdomain: Subdomain[];
  userId: string;
  testId: string;
  intensity: string;
  domainSummary: string;
  generatedContent: Record<string, unknown>;
}

interface GeneratedContent {
  breaf_insights: string;
  carrer_academic: string;
  insights: string;
  relationship: string;
}

interface AiReport {
  id: string;
  created_at: string;
  updated_at: string;
  userId: string;
  testId: string;
  generatedContent: GeneratedContent;
}

export interface ReportResponse {
  report: Domain[];
  aiReport: AiReport[];
}