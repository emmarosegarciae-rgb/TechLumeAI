const fs = require('fs');
let content = fs.readFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', 'utf8');

const geoData = {
  "enterprise-ai-agents-production": {
    aiRetrievalScore: 92,
    aiCitationScore: 90,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2027-01-15",
      editorialStatus: "Published",
      factCheckedBy: "TechlumeAI Editorial Board",
      accessibilityVerified: true
    }
  },
  "open-models-infrastructure-shift": {
    aiRetrievalScore: 89,
    aiCitationScore: 91,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2026-10-15",
      editorialStatus: "Published",
      factCheckedBy: "Nora Klein",
      accessibilityVerified: true
    }
  },
  "cybersecurity-ai-defense-brief": {
    aiRetrievalScore: 94,
    aiCitationScore: 93,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2027-01-15",
      editorialStatus: "Published",
      factCheckedBy: "Ethan Cho",
      accessibilityVerified: true
    }
  },
  "cloud-cost-architecture-guide": {
    aiRetrievalScore: 91,
    aiCitationScore: 88,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2026-10-15", // Quarterly for tools/guides
      editorialStatus: "Published",
      factCheckedBy: "TechlumeAI Editorial Board",
      accessibilityVerified: true
    }
  },
  "developer-tools-2026": {
    aiRetrievalScore: 95,
    aiCitationScore: 92,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2026-10-15", // Quarterly for tools
      editorialStatus: "Published",
      factCheckedBy: "Maya Hart",
      accessibilityVerified: true
    }
  },
  "startup-ai-monetization": {
    aiRetrievalScore: 86,
    aiCitationScore: 89,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2027-01-15",
      editorialStatus: "Published",
      factCheckedBy: "Ethan Cho",
      accessibilityVerified: true
    }
  },
  "robotics-foundation-models": {
    aiRetrievalScore: 88,
    aiCitationScore: 87,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2027-01-15",
      editorialStatus: "Published",
      factCheckedBy: "TechlumeAI Editorial Board",
      accessibilityVerified: true
    }
  },
  "data-science-evaluation-stack": {
    aiRetrievalScore: 90,
    aiCitationScore: 94,
    geoGovernance: {
      lastReviewedAt: "2026-07-15",
      nextReviewDue: "2026-10-15", // Quarterly review for evaluations
      editorialStatus: "Published",
      factCheckedBy: "Nora Klein",
      accessibilityVerified: true
    }
  }
};

for (const [slug, geo] of Object.entries(geoData)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?primaryKeyword:\\s*["'].*?["'],)`);
  
  const injectString = `\n    aiRetrievalScore: ${geo.aiRetrievalScore},
    aiCitationScore: ${geo.aiCitationScore},
    geoGovernance: ${JSON.stringify(geo.geoGovernance, null, 6).replace(/\\n/g, '').replace(/^{/, '{').replace(/}$/, '    }')},`;
    
  content = content.replace(regex, `$1${injectString}`);
}

fs.writeFileSync('c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts', content);
console.log("Injected GEO metrics and governance data.");
