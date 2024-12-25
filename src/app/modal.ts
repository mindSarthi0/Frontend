export interface Subdomain {
  name: string;
  score: number;
  intensity: string;
}

export interface Domain {
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



export interface AiReport {
  id: string;
  created_at: string;
  updated_at: string;
  userId: string;
  testId: string;
  generatedContent: string;
}

export interface ReportResponse {
  report: Domain[];
  aiReport: AiReport[];
  name: string;
}



// Updating the PersonalityResult interface to match exact domain keys
export interface PersonalityResult {
  [key: string]: DomainScore;
}

export interface DomainScore {
  domain: string;
  score: {
    value: number;
    total: number;
    level: string;
  };
  subdomains: SubdomainScore[];
}

export interface SubdomainScore {
  name: string;
  score: 'Low' | 'Average' | 'High';
}

export interface NavItem {
  label: string;
  target: string;
}

export interface PageNavConfig {
  hasQuickNav: boolean;
  isInternalPage: boolean;
  navItems: NavItem[];
}

export interface NavConfig {
  [key: string]: PageNavConfig;
}