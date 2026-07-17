export type CategorySlug =
  | "ai-engineering"
  | "enterprise-ai"
  | "ai-tools"
  | "programming-dev"
  | "ai-business"
  | "cybersecurity-ai"
  | "ai-hardware"
  | "future-tech"
  | "reviews"
  | "videos";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  color: string;
  image: string;
  featuredGuideSlug?: string;
  topicClusters?: string[];
  faqs?: { question: string; answer: string }[];
};

export type SearchIntent =
  | "Informational"
  | "Tutorial"
  | "Implementation"
  | "Implementation Guide"
  | "Comparison"
  | "Commercial Investigation"
  | "Reference"
  | "Industry Analysis"
  | "Opinion"
  | "Case Study"
  | "Research"
  | "News Analysis"
  | "Trend Analysis"
  | "FAQ"
  | "Decision Framework";

export type SearchJourneyStage =
  | "Discovery"
  | "Learning"
  | "Evaluation"
  | "Comparison"
  | "Decision"
  | "Implementation"
  | "Optimization"
  | "Advanced Learning"
  | "Enterprise Adoption"
  | "Tutorial";

export type InternalLinkRelationship =
  | "Uses"
  | "Depends On"
  | "Supports"
  | "Competes With"
  | "Extends"
  | "Integrates With"
  | "Replaces"
  | "Alternative To"
  | "Successor Of"
  | "Predecessor Of"
  | "Compatible With"
  | "Implements"
  | "Inspired By"
  | "Influences"
  | "Supersedes"
  | "Related To"
  | "Created By"
  | "Maintained By"
  | "Owned By"
  | "Built On"
  | "Powered By"
  | "Prerequisite For"
  | "Related Topic"
  | "Parent Hub"
  | "Cornerstone Reference"
  | "Requires"
  | "Defined By"
  | "Defends Against"
  | "Evaluates";

export type EntityType = 
  | "Company" 
  | "Organization" 
  | "Standard" 
  | "Protocol" 
  | "Programming Language" 
  | "Framework" 
  | "Developer Tool" 
  | "Model" 
  | "Product" 
  | "Research Paper" 
  | "Concept" 
  | "Architecture" 
  | "Industry" 
  | "Technology";

export type EntityNode = {
  id: string;
  name: string;
  type: EntityType;
  description: string;
  relationships: Array<{
    targetId: string;
    relationshipType: InternalLinkRelationship;
  }>;
};


export type TopicHub = {
  slug: string;
  name: string;
  pillar: CategorySlug;
  description: string;
  cornerstoneSlug?: string;
  subtopics?: string[];
  relatedTopics?: string[];
  faqs?: { question: string; answer: string }[];
};

export type GlossaryEntity = {
  slug: string;
  term: string;
  definition: string;
  pillar: CategorySlug;
  relatedEntities?: string[];
  cornerstoneSlug?: string;
  synonyms?: string[];
  keyApplications?: string[];
  entityClass?: EntityClass;
  profileMetadata?: EntityProfileMetadata;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  credentials?: string[];
  focusAreas?: string[];
  researchContribution?: string;
  editorialStandards?: string;
  alumniOf?: string;
  avatar: string;
  socials: {
    x?: string;
    linkedin?: string;
    website?: string;
  };
};

export type ArticleBlock =
  | { type: "paragraph"; value: string }
  | { type: "heading"; value: string }
  | { type: "quote"; value: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "code"; language: string; value: string }
  | { type: "callout"; title: string; value: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "tldr"; items: string[] }
  | { type: "definition"; term: string; definition: string; context?: string }
  | { type: "expert-opinion"; quote: string; author: string; role: string; company: string; avatar?: string }
  | { type: "comparison-matrix"; title?: string; headers: string[]; rows: string[][]; highlightColumn?: number }
  | { type: "timeline"; items: { date: string; title: string; description: string }[] }
  | { type: "stat-card"; number: string; label: string; source?: string; context?: string }
  | { type: "case-study"; company: string; metric: string; description: string; outcome: string }
  | { type: "best-practices"; title?: string; items: string[] }
  | { type: "common-mistakes"; title?: string; items: string[] }
  | { type: "checklist"; title?: string; items: { label: string; note?: string }[] }
  | { type: "key-takeaways"; title?: string; items: { label: string; insight: string }[] }
  | { type: "advantages-limitations"; title?: string; advantages: string[]; limitations: string[]; useCases?: string[] }
  | { type: "decision-framework"; title?: string; rows: { situation: string; recommendation: string; reasoning: string; alternative?: string }[] }
  | { type: "related-reading"; title?: string; items: { label: string; href: string; description: string; type: "Guide" | "Comparison" | "Tutorial" | "Glossary" | "Case Study" | "Report" }[] }
  | { type: "references"; items: { title: string; url: string; author?: string; date?: string; publisher?: string; context?: string }[] }
  | { type: "answer"; question: string; directAnswer: string; explanation?: string; benefits?: string[]; limitations?: string[]; targetAudience?: string; relatedConcepts?: string[] }
  | { type: "faq"; title?: string; items: { question: string; answer: string; intent?: string }[] }
  | { type: "next-questions"; title?: string; items: { question: string; anchorText?: string }[] }
  | { type: "practical-scenario"; scenarioType: "Real-world Example" | "Enterprise Scenario" | "Developer Workflow" | "Troubleshooting"; title: string; description: string; steps?: string[]; codeSnippet?: string; outcome?: string }
  | { type: "decision-support"; title?: string; shouldIUseThis: string; tradeOffs: string[]; alternatives: { name: string; whenToUse: string }[] }
  | { type: "ai-overview"; definition: string; whyItMatters: string; whoShouldCare: string; keyTakeaways: string[]; readingTimeMin: number; lastUpdated: string; primaryEntity: string; relatedEntities: string[] }
  | { type: "section-summary"; keyTakeaways: string[]; definitions?: { term: string; definition: string }[]; enterpriseInsights?: string[]; nextStep?: string }
  | { type: "entity-panel"; entityName: string; category: string; definition: string; purpose: string; creator?: string; releaseTimeline?: string; industry?: string; architecture?: string; competingTechnologies?: string[]; officialResources?: { title: string; url: string }[] }
  | { type: "semantic-relationships"; primaryEntity: string; relationships: { targetEntity: string; relationship: "Uses" | "Requires" | "Competes With" | "Depends On" | "Extends" | "Replaces" | "Supports" | "Integrates With"; explanation: string }[] }
  | { type: "entity-reinforcement"; technologies?: string[]; companies?: string[]; standards?: string[]; protocols?: string[]; frameworks?: string[]; apis?: string[]; languages?: string[]; enterpriseConcepts?: string[] }
  | { type: "cognitive-pathway"; title?: string; stages: { stage: "1. Recognition" | "2. Understanding" | "3. Connection" | "4. Application" | "5. Evaluation" | "6. Expert Judgment"; question: string; reasoningSummary: string }[] }
  | { type: "reasoning-decision-tree"; title: string; problemStatement: string; ifCondition: string; ifTrue: { recommendation: string; rationale: string }; ifFalse: { recommendation: string; rationale: string }; enterpriseScenario?: string }
  | { type: "mental-model"; title: string; modelType: "Problem-Solution Architecture" | "First-Principles Breakdown" | "Analogy Engineering" | "Multiple Perspectives Matrix" | "Principle-Based Teaching"; analogyOrPrinciple: string; breakdown: { label: string; description: string }[]; perspectives?: { role: string; takeaway: string }[] }
  | { type: "editorial-governance-panel"; contentClass: string; primaryPillar: string; topicCluster: string; targetAudience: string; opportunityScore: "Critical" | "High" | "Medium" | "Low"; editorialScore: number; decayStatus: "Fresh" | "Monitoring Due" | "Needs Update"; futureExpansion: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  dek: string;
  category: CategorySlug;
  author: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  tags: string[];
  primaryIntent?: SearchIntent;
  contentClass?: "Flagship Guide" | "Cornerstone Guide" | "Technical Deep Dive" | "Implementation Tutorial" | "Architecture Guide" | "Enterprise Playbook" | "Tool Review" | "Benchmark Report" | "Comparison Guide" | "Case Study" | "Opinion Analysis" | "Research Summary" | "Industry Report" | "Glossary" | "Framework Guide" | "Learning Path";
  topicCluster?: string;
  isCornerstone?: boolean;
  parentTopic?: string;
  primaryKeyword?: string;
  primaryEntity?: string;
  supportingEntities?: string[];
  secondaryKeywords?: string[];
  questionKeywords?: string[];
  entityVariations?: string[];
  searchJourneyStage?: SearchJourneyStage;
  internalLinkGraph?: Array<{
    anchorText: string;
    targetSlug: string;
    relationshipType: string;
    targetType:
      | "Parent Pillar"
      | "Primary Hub"
      | "Cornerstone Guide"
      | "Supporting Tutorial"
      | "Comparison Article"
      | "Glossary Entry"
      | "Related FAQ"
      | "Recommended Next Reading";
  }>;
  relatedEntities?: string[];
  knowledgeGraph?: {
    parent?: string;
    children?: string[];
    related?: string[];
    foundational?: string[];
    competing?: string[];
  };
  featured?: boolean;
  editorsPick?: boolean;
  trending?: boolean;
  sponsored?: boolean;
  video?: {
    provider: "youtube" | "mp4";
    url: string;
    duration: string;
  };
  editorNote?: string;
  factCheckedBy?: string;
  factCheckedAt?: string;
  tldr?: string[];
  pros?: string[];
  cons?: string[];
  faq?: { question: string; answer: string }[];
  references?: Array<{
    title: string;
    url: string;
    author?: string;
    date?: string;
    publisher?: string;
    tier?: "Tier 1: Official / Academic" | "Tier 2: Research / Industry" | "Tier 3: Expert Commentary";
    context?: string;
  }>;
  aiRetrievalScore?: number;
  aiCitationScore?: number;
  geoGovernance?: {
    lastReviewedAt: string;
    nextReviewDue: string;
    editorialStatus: "Draft" | "In Review" | "Published" | "Needs Update" | "Deprecated";
    reviewNotes?: string;
    factCheckedBy?: string;
    accessibilityVerified?: boolean;
  };
  qaMetrics?: {
    geoScore: number;
    retrievalScore: number;
    citationScore: number;
    trustScore: number;
    enterpriseQualityScore: number;
    multiTurnScore?: number;
    aiOverviewScore?: number;
    entityAuthorityScore?: number;
    aiReasoningScore?: number;
    editorialIntelligenceScore?: number;
  };
  publicationMetadata?: PublicationHierarchyMetadata;
  editorialScorecard?: EditorialScorecardRating;
  productionMetadata?: ArticleProductionMetadata;
  qaGovernanceMetadata?: ArticleQAGovernanceMetadata;
  lifecycleGovernanceMetadata?: ArticleLifecycleGovernanceMetadata;
  content: ArticleBlock[];
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

// ============================================================================
// Phase 8: Enterprise Content Discovery & Competitive Intelligence Engine
// ============================================================================

export type DiscoveryCategory =
  | "Category A: Emerging Technology"
  | "Category B: Enterprise AI"
  | "Category C: Developer Tools"
  | "Category D: Programming"
  | "Category E: Cybersecurity"
  | "Category F: Infrastructure"
  | "Category G: Business Strategy"
  | "Category H: Future Technology"
  | "Category I: Research Breakthrough"
  | "Category J: Market Intelligence";

export type DiscoveryOpportunity = {
  id: string;
  title: string;
  category: DiscoveryCategory;
  signalSource: string;
  detectedAt: string;
  targetCluster: string;
  primaryKeywords: string[];
  entityTargets: string[];
  opportunityMatrix: {
    searchDemand: number;        // 1-10 (weight x1)
    enterpriseDemand: number;    // 1-10 (weight x2)
    aiSearchVisibility: number;  // 1-10 (weight x1)
    technicalImportance: number; // 1-10 (weight x1)
    topicalAuthorityValue: number; // 1-10 (weight x2)
    evergreenPotential: number;  // 1-10 (weight x2)
    competitionLevel: number;    // 1-10 (10 = low competition / high gap opportunity)
    commercialIntent: number;    // 1-10 (weight x1)
    knowledgeGraphContribution: number; // 1-10 (weight x1)
    futureGrowth: number;        // 1-10 (weight x2)
  };
  weightedPriorityScore: number; // calculated max 130
  discoveryScorecard: number;    // normalized 0-100 (Target >= 95)
  status: "Signal Detected" | "Validated" | "Assigned to Editorial" | "In Production" | "Published";
};

export type CompetitorAudit = {
  publicationName: string;
  domain: string;
  focusArea: string;
  publishingVelocity: string;
  contentDepthRating: "Shallow" | "Moderate" | "Deep" | "Enterprise-Grade";
  identifiedWeaknesses: string[];
  contentGaps: string[];
  techlumeAdvantageStrategy: string;
};

export type EmergingEntity = {
  id: string;
  canonicalName: string;
  type: "AI Model" | "Framework" | "Protocol" | "Inference Engine" | "Enterprise Platform" | "Hardware Architecture";
  firstDetectedDate: string;
  growthVelocity: "Explosive" | "High" | "Steady";
  description: string;
  plannedArticlesCount: number;
};

export type TopicalClusterPlan = {
  clusterId: string;
  clusterName: string;
  pillar: string;
  cornerstoneGuide: string;
  spokeArticles: {
    slug: string;
    title: string;
    keywordFocus: string;
    stage: "Planned" | "In Production" | "Published";
  }[];
};

// ============================================================================
// Phase 9: Enterprise Editorial Planning & Topical Authority Ecosystem
// ============================================================================

export type EditorialPillar =
  | "AI Engineering & Large Language Models"
  | "Enterprise AI"
  | "AI Tools"
  | "Programming & Software Engineering"
  | "AI Business"
  | "Cybersecurity & AI"
  | "AI Infrastructure & Hardware"
  | "Future Technology";

export type PublicationHierarchyMetadata = {
  editorialPillar: EditorialPillar;
  topicCluster: string;
  primaryEntity: string;
  secondaryEntities: string[];
  searchIntent: "Architecture Guide" | "Implementation Guide" | "Evaluation & Benchmarks" | "Strategic Playbook" | "Reference & Vocabulary";
  targetAudience: "Staff Engineers & Architects" | "C-Suite & IT Leadership" | "Security & Compliance Leads" | "Full-Stack & AI Developers" | "Data Scientists & MLOps";
  knowledgeRelationships: {
    cornerstoneSlug: string;
    parentTopic: string;
    relatedTutorials: string[];
    comparisonArticles: string[];
    glossaryTerms: string[];
  };
  futureExpansionOpportunities: string[];
};

export type EditorialScorecardRating = {
  knowledgeValue: number;      // 1-10
  enterpriseValue: number;     // 1-10
  clusterContribution: number; // 1-10
  researchQuality: number;     // 1-10
  internalLinking: number;     // 1-10
  entityStrength: number;      // 1-10
  topicalAuthority: number;    // 1-10
  visualQuality: number;       // 1-10
  futureExpandability: number; // 1-10
  aiReadiness: number;         // 1-10
  totalScore: number;          // 0-100 (Target >= 95)
};

export type EditorialClusterStage =
  | "Cornerstone Guide"
  | "Supporting Guide"
  | "Comparison"
  | "Tutorial"
  | "Implementation Guide"
  | "Case Study"
  | "FAQ"
  | "Glossary"
  | "Industry Report"
  | "Research Summary"
  | "Technical Deep Dive"
  | "Benchmark Report";

export type EditorialLearningStage =
  | "Beginner Guide"
  | "Fundamentals"
  | "Architecture"
  | "Implementation"
  | "Optimization"
  | "Enterprise Deployment"
  | "Advanced Strategies"
  | "Future Trends";

export type EditorialCluster = {
  id: string;
  name: string;
  pillar: EditorialPillar;
  cornerstoneSlug: string;
  description: string;
  completionPercentage: number;
  supportingArticles: {
    slug: string;
    title: string;
    stage: EditorialClusterStage;
    status: "Published" | "In Production" | "Planned";
    learningStage: EditorialLearningStage;
  }[];
  learningPathway: {
    stage: EditorialLearningStage;
    articleSlug?: string;
    articleTitle: string;
    status: "Published" | "In Production" | "Planned";
  }[];
};

export type EditorialCalendarSlot = {
  id: string;
  cadence: "Weekly" | "Monthly" | "Quarterly" | "Annual";
  formatFocus: string;
  title: string;
  pillar: EditorialPillar;
  targetCluster: string;
  scheduledFor: string;
  status: "Queued" | "Drafting" | "Review Ready" | "Published";
};

// ============================================================================
// Phase 10: Enterprise Editorial Production System & 17-Stage Workflow Pipeline
// ============================================================================

export type ProductionStageStatus = "Not Started" | "In Progress" | "In Review" | "Passed & Verified";

export type ProductionStageName =
  | "1. Editorial Assignment"
  | "2. Topic Validation"
  | "3. Research Intelligence"
  | "4. Competitor Analysis"
  | "5. Search Intent Mapping"
  | "6. Semantic Entity Mapping"
  | "7. Article Outline"
  | "8. Table of Contents"
  | "9. Visual Asset Planning"
  | "10. Technical Writing"
  | "11. SEO + GEO Optimization"
  | "12. Editorial Review"
  | "13. Technical Fact Verification"
  | "14. Visual QA"
  | "15. Accessibility Review"
  | "16. Publication"
  | "17. Performance Monitoring";

export type ProductionStageItem = {
  stageNumber: number;
  stageName: ProductionStageName;
  status: ProductionStageStatus;
  completedAt?: string;
  verifiedBy?: string;
  notes?: string;
};

export type VisualAssetPlanItem = {
  id: string;
  assetType:
    | "Hero Illustration"
    | "Architecture Diagram"
    | "Workflow Diagram"
    | "Comparison Matrix"
    | "Decision Tree"
    | "Timeline"
    | "Checklist"
    | "Process Flow"
    | "Infographic"
    | "Code Screenshots"
    | "Charts"
    | "Feature Tables"
    | "Callout Boxes"
    | "Summary Cards";
  title: string;
  placementSection: string;
  designSpecification: string;
  status: "Planned" | "Designed" | "Verified";
};

export type ResearchSourceItem = {
  category:
    | "Official Documentation"
    | "Academic Publications"
    | "Enterprise Case Studies"
    | "Vendor Documentation"
    | "Engineering Blogs"
    | "Benchmark Reports"
    | "Standards Documentation";
  title: string;
  url: string;
  verifiedAuthority: boolean;
};

export type EditorialReviewSignoff = {
  technicalReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  grammarReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  factChecking: { passed: boolean; verifiedBy: string; verifiedAt: string };
  seoReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  geoReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  entityValidation: { passed: boolean; verifiedBy: string; verifiedAt: string };
  internalLinkingReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  accessibilityReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  visualReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
  mobileReview: { passed: boolean; verifiedBy: string; verifiedAt: string };
};

export type ProductionScorecardRating = {
  researchQuality: number;       // 1-10
  technicalAccuracy: number;     // 1-10
  writingQuality: number;        // 1-10
  visualExcellence: number;      // 1-10
  enterpriseRelevance: number;   // 1-10
  semanticCompleteness: number;  // 1-10
  aiSearchReadiness: number;     // 1-10
  editorialConsistency: number;  // 1-10
  accessibility: number;         // 1-10
  publicationReadiness: number;  // 1-10
  totalScore: number;            // 0-100 (Target >= 95)
};

export type ArticleProductionMetadata = {
  currentStage: ProductionStageName;
  workflowStatus: "In Production" | "Review Stage" | "Published & Monitored";
  workflowStages: ProductionStageItem[];
  researchSources: ResearchSourceItem[];
  visualPlan: VisualAssetPlanItem[];
  reviewSignoff: EditorialReviewSignoff;
  productionScorecard: ProductionScorecardRating;
};

// ============================================================================
// Phase 11: Enterprise Editorial QA System & Continuous Governance Framework
// ============================================================================

export type QAFrameworkPhaseName =
  | "Phase 1: Pre-Publication Review"
  | "Phase 2: Technical Validation"
  | "Phase 3: Publication Verification"
  | "Phase 4: Continuous Improvement";

export type QACheckpointItem = {
  phase: QAFrameworkPhaseName;
  category: string;
  checkpointName: string;
  description: string;
  verificationMethod: "Automated Check" | "Manual Audit" | "Hybrid Engine";
  status: "Passed & Verified" | "Flagged for Review" | "Continuous Monitoring";
  verifiedAt: string;
  verifiedBy: string;
};

export type FactValidationRecord = {
  claimId: string;
  statement: string;
  authoritativeSourceType:
    | "Official documentation"
    | "Vendor documentation"
    | "Standards bodies"
    | "Academic research"
    | "Peer-reviewed publications"
    | "Engineering blogs"
    | "Enterprise whitepapers"
    | "RFCs";
  sourceUrl: string;
  verificationStatus: "Verified True" | "Requires Citation";
};

export type AuditCycleRecord = {
  auditType:
    | "Weekly Technical Audit"
    | "Monthly Entity & Ranking Audit"
    | "Quarterly Competitor Refresh"
    | "Annual Complete Review";
  lastCompletedAt: string;
  nextScheduledAt: string;
  findingsSummary: string;
  actionItemsCount: number;
};

export type QAQualityScorecardRating = {
  technicalAccuracy: number;       // 1-10
  editorialQuality: number;        // 1-10
  enterpriseValue: number;         // 1-10
  visualQuality: number;           // 1-10
  accessibility: number;           // 1-10
  semanticSeo: number;             // 1-10
  geoOptimization: number;         // 1-10
  knowledgeGraphIntegration: number; // 1-10
  aiReadiness: number;             // 1-10
  userExperience: number;          // 1-10
  publicationStability: number;    // 1-10
  totalScore: number;              // 0-100 (Target >= 98)
};

export type ArticleQAGovernanceMetadata = {
  currentQAPhase: QAFrameworkPhaseName;
  overallComplianceStatus: "Fully Compliant (>=98)" | "Optimization Scheduled";
  checkpoints: QACheckpointItem[];
  factValidations: FactValidationRecord[];
  auditSchedule: AuditCycleRecord[];
  qualityScorecard: QAQualityScorecardRating;
};

// ============================================================================
// Phase 12: Enterprise Content Lifecycle Management System (CLMS)
// ============================================================================

export type LifecycleStageName =
  | "Planning"
  | "Research"
  | "Production"
  | "Publication"
  | "Monitoring"
  | "Performance Analysis"
  | "Content Refresh"
  | "Knowledge Expansion"
  | "Authority Reinforcement"
  | "Long-Term Maintenance"
  | "Legacy Cornerstone Status";

export type DecaySignalItem = {
  signalType: string;
  status: "Healthy" | "Decay Detected" | "Review Scheduled";
  description: string;
  detectedAt: string;
  severity: "Low" | "Medium" | "High" | "Critical";
};

export type ContentHealthScorecard = {
  freshness: number;               // 1-10
  technicalAccuracy: number;       // 1-10
  enterpriseRelevance: number;     // 1-10
  searchPerformance: number;       // 1-10
  aiVisibility: number;            // 1-10
  semanticCompleteness: number;    // 1-10
  internalLinking: number;         // 1-10
  externalReferences: number;      // 1-10
  visualQuality: number;           // 1-10
  accessibility: number;           // 1-10
  knowledgeGraphIntegration: number; // 1-10
  totalScore: number;              // 0-100 (Target >= 95)
};

export type RefreshTriggerRecord = {
  triggerName: string;
  condition: string;
  refreshType: "Minor Refresh" | "Standard Refresh" | "Major Refresh";
  actionProtocol: string;
  lastTriggeredAt: string;
};

export type TopicalExpansionPlanItem = {
  stage:
    | "Cornerstone Guide"
    | "Advanced Guide"
    | "Enterprise Tutorial"
    | "Comparison"
    | "Implementation Checklist"
    | "Architecture Deep Dive"
    | "Case Study"
    | "Security Analysis"
    | "Benchmark Report"
    | "Future Outlook";
  title: string;
  slug: string;
  status: "Published" | "In Production" | "Planned Expansion";
};

export type SearchAndAIMonitoringRecord = {
  metricName: string;
  currentLevel: string;
  trend: "Upward" | "Stable" | "Optimization Needed";
  platform:
    | "Google Search"
    | "ChatGPT"
    | "Claude"
    | "Gemini"
    | "Perplexity"
    | "Microsoft Copilot"
    | "Apple Intelligence"
    | "Core Web Vitals";
};

export type ArticleLifecycleGovernanceMetadata = {
  currentLifecycleStage: LifecycleStageName;
  contentPriority: "Critical" | "High" | "Medium" | "Low";
  lastRefreshedAt: string;
  nextScheduledAudit: string;
  healthScorecard: ContentHealthScorecard;
  decaySignals: DecaySignalItem[];
  refreshTriggers: RefreshTriggerRecord[];
  topicalExpansionPlan: TopicalExpansionPlanItem[];
  searchAndAIMonitoring: SearchAndAIMonitoringRecord[];
};

// ==========================================
// Phase 13: Enterprise Knowledge Graph Engine & Entity Authority System
// ==========================================

export type EntityClass =
  | "AI Model"
  | "Company"
  | "Programming Language"
  | "Framework"
  | "Protocol"
  | "Standard"
  | "Cloud Platform"
  | "Open Source Project"
  | "Research Paper"
  | "University"
  | "Enterprise Product"
  | "Hardware"
  | "Person"
  | "Developer Tool"
  | "Security Concept"
  | "Business Framework"
  | "Industry Report"
  | "Technology"
  | "Concept";

export type RelationshipPredicate =
  | "uses"
  | "depends-on"
  | "competes-with"
  | "integrates-with"
  | "created-by"
  | "standardized-by"
  | "replaced-by"
  | "alternative-to"
  | "extends"
  | "supports"
  | "requires"
  | "runs-on"
  | "implements"
  | "secures"
  | "optimizes"
  | "influences";

export type EntityRelationshipTriple = {
  tripleId: string;
  subjectSlug: string;
  subjectName: string;
  predicate: RelationshipPredicate;
  objectSlug: string;
  objectName: string;
  description: string;
  confidenceScore: number;
};

export type EntityAuthorityScorecard = {
  coverageDepth: number;
  relationshipStrength: number;
  searchDemand: number;
  enterpriseImportance: number;
  citationFrequency: number;
  semanticValue: number;
  knowledgeCompleteness: number;
  clusterIntegration: number;
  futureGrowth: number;
  aiVisibility: number;
  totalScore: number;
};

export type EntityOfficialSource = {
  title: string;
  url: string;
  type: "Official Documentation" | "RFC / Standard" | "Academic Paper" | "Enterprise Guide" | "GitHub Repository";
};

export type EntityProfileMetadata = {
  aliases: string[];
  officialSources: EntityOfficialSource[];
  parentCategory: string;
  childRelationships: string[];
  relatedTechnologies: string[];
  industry: string;
  firstAppearance: string;
  currentStatus: "Production Ready" | "Active Standard" | "Rapid Evolution" | "Emerging" | "Deprecated";
  enterpriseUsage: string;
  keyBenefits: string[];
  limitations: string[];
  associatedArticles: string[];
  futureExpansionOpportunities: string[];
  authorityScorecard: EntityAuthorityScorecard;
};

// ==========================================
// Phase 14: Enterprise AI Search Visibility System (GEO / AEO / RAG / Citation Engine)
// ==========================================

export type AISearchEnginePlatform =
  | "Google Search"
  | "Google AI Overviews"
  | "ChatGPT"
  | "Claude"
  | "Gemini"
  | "Perplexity"
  | "Microsoft Copilot"
  | "Meta AI"
  | "Apple Intelligence"
  | "Enterprise RAG Systems"
  | "AI Search Engines"
  | "Voice Assistants"
  | "Future Answer Engines";

export type AISearchVisibilityStage =
  | "Discoverability"
  | "Crawlability"
  | "Indexability"
  | "Semantic Understanding"
  | "Entity Recognition"
  | "Retrieval Relevance"
  | "Information Quality"
  | "Source Trust"
  | "Answer Inclusion"
  | "Citation"
  | "Recommendation";

export type CitationWorthinessEvaluation = {
  originalInsight: boolean;
  specificEvidence: boolean;
  clearExplanation: boolean;
  usefulData: boolean;
  technicalAccuracy: boolean;
  uniqueSynthesis: boolean;
  enterpriseRelevance: boolean;
  actionableGuidance: boolean;
  overallEligibility: "Highly Citable" | "Qualified" | "Optimization Needed";
};

export type QueryFanOutCategory =
  | "Definition Queries"
  | "How-To Queries"
  | "Comparison Queries"
  | "Best-Of Queries"
  | "Problem Queries"
  | "Enterprise Queries"
  | "Technical Queries"
  | "Research Queries";

export type QueryFanOutModel = {
  id: string;
  primaryTopic: string;
  canonicalSlug: string;
  pillar: CategorySlug;
  queries: Array<{
    category: QueryFanOutCategory;
    question: string;
    targetSectionHeader: string;
    answerSummary: string;
  }>;
};

export type CompetitorCitationAuditItem = {
  competitorDomain: string;
  citedTopic: string;
  citationTriggers: string[];
  referencedSections: string[];
  evidenceUsed: string;
  ownedEntities: string[];
  contentGaps: string[];
  techlumeSuperiorAssetStrategy: string;
};

export type AIAnswerEngineAuditRecord = {
  platform: AISearchEnginePlatform;
  visibilityStatus: "Primary Answer & Citation" | "Referenced Source" | "Entity Recognized" | "Not Yet Crawled";
  citationAccuracy: "100% Accurate" | "Minor Paraphrasing" | "Incomplete Extraction";
  extractionBlockType: "Direct Definition" | "Comparison Table" | "Decision Framework" | "Code Snippet" | "FAQ Block";
  entityRecognitionFidelity: number; // 1-100
  lastAuditedAt: string;
};

export type PageRetrievalReadinessAudit = {
  slug: string;
  title: string;
  pillar: CategorySlug;
  primaryEntity: string;
  answerFirstStructure: {
    hasDirectAnswer: boolean;
    hasShortExplanation: boolean;
    hasTechnicalDepth: boolean;
    hasEvidence: boolean;
    hasPracticalApplication: boolean;
    hasLimitations: boolean;
    hasExpertConclusion: boolean;
  };
  entityClarityScore: number;     // 1-10
  semanticCoverageScore: number;  // 1-10
  structuredDataScore: number;    // 1-10
  citationPotentialScore: number; // 1-10
  originalAssetsCount: number;
  aiRetrievalScore: number;       // 1-100
  aiCitationScore: number;        // 1-100
  aiSearchScore: number;          // 0-100 (Target >= 95)
  status: "Verified Production Ready (>=95)" | "Needs Optimization";
  lastVerifiedAt: string;
};

export type CitationWorthyAsset = {
  assetId: string;
  title: string;
  assetType: "Original Research" | "Comparison Matrix" | "Decision Framework" | "Technical Diagram" | "Benchmark Data" | "Enterprise Playbook" | "Practical Checklist";
  canonicalArticleSlug: string;
  description: string;
  citationTrigger: string;
  aiEngineAdoptionRating: "High Velocity" | "Verified Cited" | "Emerging Candidate";
};

export type AISearchVisibilitySystemRegistry = {
  systemVersion: string;
  lastAuditedDate: string;
  averageAISearchScore: number;
  pageAudits: PageRetrievalReadinessAudit[];
  citationAssets: CitationWorthyAsset[];
  queryFanOutModels: QueryFanOutModel[];
  competitorAudits: CompetitorCitationAuditItem[];
  answerEngineMonitoring: AIAnswerEngineAuditRecord[];
};

// ==========================================
// Phase 15: Enterprise Internal Link Graph Engine (Semantic Linking & Hub-and-Spoke)
// ==========================================

export type InternalLinkTargetType =
  | "Parent Pillar"
  | "Primary Hub"
  | "Cornerstone Guide"
  | "Supporting Tutorial"
  | "Comparison Article"
  | "Glossary Entry"
  | "Related FAQ"
  | "Recommended Next Reading"
  | "Research Asset"
  | "Case Study";

export type HubAndSpokeSpokeItem = {
  slug: string;
  title: string;
  spokeType: "Supporting Tutorial" | "Technical Deep Dive" | "Comparison" | "Case Study" | "Glossary Entry" | "Research Asset";
  relationshipToHub: string;
  contextualAnchorText: string;
};

export type HubAndSpokeCluster = {
  hubSlug: string;
  hubTitle: string;
  pillar: CategorySlug;
  hubDescription: string;
  spokes: HubAndSpokeSpokeItem[];
};

export type LearningPathwayStageLevel =
  | "Fundamentals"
  | "Mechanism Breakdown"
  | "Architecture Patterns"
  | "Decision Matrix / Comparison"
  | "Implementation Tutorial"
  | "Enterprise Deployment"
  | "Security & Governance";

export type LearningPathwayStep = {
  stepIndex: number;
  slug: string;
  title: string;
  stageLevel: LearningPathwayStageLevel;
  learningObjective: string;
};

export type LearningPathway = {
  id: string;
  pathwayName: string;
  targetAudience: string;
  steps: LearningPathwayStep[];
};

export type AnchorTextRule = {
  ruleId: string;
  ruleName: string;
  description: string;
  prohibitedPatterns: string[];
  recommendedPatternExample: string;
};

export type InternalLinkQualityAudit = {
  slug: string;
  title: string;
  totalIncomingLinks: number;
  totalOutgoingLinks: number;
  isOrphan: boolean;
  parentCornerstoneSlug: string;
  clusterConnectivity: number;      // 1-10
  anchorTextDiversity: number;      // 1-10
  contextualRelevanceScore: number; // 1-10
  aiRetrievalPathScore: number;     // 1-10
  internalLinkQualityScore: number; // 1-100 (Target >= 95)
  status: "Verified Strong Link Graph (>=95)" | "Orphan / Needs Optimization";
};

export type EnterpriseInternalLinkGraphRegistry = {
  systemVersion: string;
  lastAuditedDate: string;
  totalInternalLinks: number;
  orphanPagesCount: number;
  averageLinkDepth: number;
  averageInternalLinkQualityScore: number;
  hubAndSpokeClusters: HubAndSpokeCluster[];
  learningPathways: LearningPathway[];
  anchorTextGuidelines: AnchorTextRule[];
  qualityAudits: InternalLinkQualityAudit[];
};

// ============================================================================
// PHASE 16: ENTERPRISE TECHNICAL SEO INFRASTRUCTURE SYSTEM
// ============================================================================

export type TechnicalSEOBenchmarkTarget = {
  metricName: string;
  targetThreshold: string;
  currentSystemPerformance: string;
  status: "Verified Optimal" | "Needs Attention";
};

export type CrawlabilityAuditItem = {
  layer: "Robots.txt Governance" | "XML Sitemap System" | "URL Architecture" | "Status Codes & Redirects" | "JavaScript Rendering";
  auditCheckpoint: string;
  verificationMethod: string;
  status: "Verified Compliant" | "Action Required";
  notes: string;
};

export type IndexabilityAuditItem = {
  url: string;
  pageType: "Homepage" | "Editorial Pillar" | "Cornerstone Guide" | "Supporting Tutorial" | "Glossary" | "404 Error Boundary";
  httpStatus: number;
  isIndexable: boolean;
  canonicalSignal: string;
  xRobotsTag: "index, follow" | "noindex, follow" | "noindex, nofollow";
  sitemapIncluded: boolean;
  technicalHealthScore: number; // 1-100 (Target >= 95)
};

export type CoreWebVitalsAudit = {
  pagePath: string;
  lcpTarget: "< 2.5s (Optimal < 1.5s)";
  lcpObserved: string;
  inpTarget: "< 200ms (Optimal < 100ms)";
  inpObserved: string;
  clsTarget: "< 0.1 (Optimal < 0.05)";
  clsObserved: string;
  renderingStrategy: "Static Generation (SSG)" | "Server-Side Rendering (SSR)" | "ISR";
  status: "Verified Optimal" | "Needs Optimization";
};

export type URLArchitectureRule = {
  ruleId: string;
  pattern: string;
  description: string;
  enforcement: "Strict Canonical Path" | "No Parameters" | "Trailing Slash Normalized";
};

export type EnterpriseTechnicalSEORegistry = {
  systemVersion: string;
  lastAuditedDate: string;
  overallTechnicalHealthScore: number; // Target >= 95/100
  zeroOrphansVerified: boolean;
  robotsTxtClean: boolean;
  benchmarks: TechnicalSEOBenchmarkTarget[];
  crawlabilityAudits: CrawlabilityAuditItem[];
  indexabilityAudits: IndexabilityAuditItem[];
  coreWebVitalsAudits: CoreWebVitalsAudit[];
  urlGovernanceRules: URLArchitectureRule[];
};






