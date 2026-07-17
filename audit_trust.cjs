/**
 * audit_trust.cjs
 * Scans articles.ts for:
 * 1. Terminology inconsistencies (informal vs formal entity names)
 * 2. geoGovernance editorialStatus values
 * 3. factCheckedBy presence per article
 * 4. aiRetrievalScore and aiCitationScore values
 */
const fs = require('fs');
const src = fs.readFileSync(
  'c:/Users/DELL/Documents/Codex/2026-07-08/fo/outputs/techlumeai/lib/data/articles.ts',
  'utf8'
);

// ── 1. Terminology consistency checks ─────────────────────────────────────────
const termChecks = [
  { informal: /\blarge language model(?!s?\s*\()/gi,  formal: 'Large Language Model (LLM)' },
  { informal: /\bretrieval augmented generation(?!\s*\()/gi, formal: 'Retrieval-Augmented Generation (RAG)' },
  { informal: /\bmodel context protocol(?!\s*\()/gi,  formal: 'Model Context Protocol (MCP)' },
  { informal: /\bhuman in the loop/gi, formal: 'Human-in-the-Loop (HITL)' },
  { informal: /\bvision language action/gi, formal: 'Vision-Language-Action (VLA)' },
  { informal: /\bgenerative engine optimization(?!\s*\()/gi, formal: 'Generative Engine Optimization (GEO)' },
];

console.log('=== TERMINOLOGY CONSISTENCY AUDIT ===');
for (const check of termChecks) {
  const matches = src.match(check.informal) || [];
  if (matches.length > 0) {
    console.log(`[WARN] Found ${matches.length} informal usage(s): "${matches[0]}" → should be "${check.formal}"`);
  }
}

// ── 2. Editorial status per article ───────────────────────────────────────────
console.log('\n=== EDITORIAL STATUS AUDIT ===');
const editorialMatches = [...src.matchAll(/editorialStatus:\s*["']([^"']+)["']/g)];
editorialMatches.forEach(m => console.log(`  editorialStatus: ${m[1]}`));

// ── 3. factCheckedBy presence ─────────────────────────────────────────────────
console.log('\n=== FACT-CHECK COVERAGE AUDIT ===');
const slugMatches = [...src.matchAll(/slug:\s*["']([^"']+)["']/g)];
const factChecks = [...src.matchAll(/"?factCheckedBy"?:\s*["']([^"']+)["']/g)];
console.log(`  Articles: ${slugMatches.length} | factCheckedBy fields: ${factChecks.length}`);

// ── 4. AI Scores ──────────────────────────────────────────────────────────────
console.log('\n=== AI SCORE AUDIT ===');
const retrievalScores = [...src.matchAll(/aiRetrievalScore:\s*(\d+)/g)].map(m => parseInt(m[1]));
const citationScores  = [...src.matchAll(/aiCitationScore:\s*(\d+)/g)].map(m => parseInt(m[1]));
const avgRetrieval = retrievalScores.reduce((a,b)=>a+b,0)/retrievalScores.length;
const avgCitation  = citationScores.reduce((a,b)=>a+b,0)/citationScores.length;
console.log(`  Retrieval Scores: [${retrievalScores.join(', ')}] → Avg: ${avgRetrieval.toFixed(1)}`);
console.log(`  Citation Scores:  [${citationScores.join(', ')}] → Avg: ${avgCitation.toFixed(1)}`);
console.log(`  Code blocks total: ${(src.match(/type:\s*"code"/g)||[]).length} (need 8+)`);
console.log(`  Quote blocks total: ${(src.match(/type:\s*"quote"/g)||[]).length} (need 8+)`);
