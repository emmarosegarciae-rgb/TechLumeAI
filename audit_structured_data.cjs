const fs = require('fs');
const path = require('path');

const NEXT_SERVER_DIR = path.join(__dirname, '.next', 'server', 'app');

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function audit() {
  console.log('========================================================================');
  console.log('         TECHLUMEAI ENTERPRISE STRUCTURED DATA AUDIT ENGINE             ');
  console.log('========================================================================');

  const htmlFiles = getAllHtmlFiles(NEXT_SERVER_DIR);
  console.log(`[INFO] Found ${htmlFiles.length} static HTML routes compiled in .next/server/app/`);

  if (htmlFiles.length === 0) {
    console.error('[ERROR] No HTML files found. Run npm run build first.');
    process.exit(1);
  }

  let totalPagesChecked = 0;
  let totalScriptsChecked = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  const entityTypesFound = new Set();
  const idGraphSet = new Set();
  const missingIdList = [];
  const relationshipLinkages = {
    webSiteToOrganization: 0,
    articleToOrganization: 0,
    articleToAuthor: 0,
    articleToGlossary: 0,
    articleToTopics: 0
  };

  for (const filePath of htmlFiles) {
    const relPath = path.relative(NEXT_SERVER_DIR, filePath);
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract all JSON-LD script blocks
    const matches = [...content.matchAll(/<script[^>]*type=[\"']application\/ld\+json[\"'][^>]*>(.*?)<\/script>/gis)];
    if (matches.length > 0) {
      totalPagesChecked++;
    }

    for (const match of matches) {
      totalScriptsChecked++;
      const rawJson = match[1];
      let data;
      try {
        data = JSON.parse(rawJson);
      } catch (err) {
        console.error(`[ERROR] Invalid JSON-LD syntax in route ${relPath}: ${err.message}`);
        totalErrors++;
        continue;
      }

      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        if (!item['@context'] || !item['@context'].includes('schema.org')) {
          console.warn(`[WARNING] Missing or non-standard @context in ${relPath} (${item['@type']})`);
          totalWarnings++;
        }

        const type = item['@type'];
        if (type) entityTypesFound.add(type);

        // Check @id identity anchor
        if (item['@id']) {
          idGraphSet.add(item['@id']);
        } else {
          missingIdList.push({ route: relPath, type });
        }

        // Verify Graph Relationships
        if (type === 'WebSite' && item.publisher && item.publisher['@id'] && item.publisher['@id'].includes('#organization')) {
          relationshipLinkages.webSiteToOrganization++;
        }
        if ((type === 'Article' || type === 'TechArticle' || type === 'NewsArticle') && item.publisher && item.publisher['@id'] && item.publisher['@id'].includes('#organization')) {
          relationshipLinkages.articleToOrganization++;
        }
        if ((type === 'Article' || type === 'TechArticle' || type === 'NewsArticle') && item.author && item.author['@id'] && item.author['@id'].includes('#person')) {
          relationshipLinkages.articleToAuthor++;
        }
        if (item.about && Array.isArray(item.about)) {
          for (const aboutItem of item.about) {
            if (aboutItem['@id'] && aboutItem['@id'].includes('#term')) {
              relationshipLinkages.articleToGlossary++;
            }
          }
        }
        if (item.isPartOf && item.isPartOf['@id'] && item.isPartOf['@id'].includes('#collection')) {
          relationshipLinkages.articleToTopics++;
        }
      }
    }
  }

  console.log('\n--- AUDIT SUMMARY STATISTICS ---');
  console.log(`Total Pages Audited:         ${totalPagesChecked} / ${htmlFiles.length}`);
  console.log(`Total JSON-LD Scripts:       ${totalScriptsChecked}`);
  console.log(`Syntax Errors Found:         ${totalErrors}`);
  console.log(`Validation Warnings:         ${totalWarnings}`);
  console.log(`Unique Entity @types Found:  ${[...entityTypesFound].join(', ')}`);
  console.log(`Unique @id Graph Nodes:      ${idGraphSet.size}`);

  console.log('\n--- INTERCONNECTED SCHEMA GRAPH VERIFICATION ---');
  console.log(`✓ WebSite -> Organization (@id linkages):  ${relationshipLinkages.webSiteToOrganization}`);
  console.log(`✓ Article -> Organization (@id linkages):  ${relationshipLinkages.articleToOrganization}`);
  console.log(`✓ Article -> Author Person (@id linkages): ${relationshipLinkages.articleToAuthor}`);
  console.log(`✓ Article -> Glossary Term (@id linkages): ${relationshipLinkages.articleToGlossary}`);
  console.log(`✓ Article -> Topic Hub Collection (@id):   ${relationshipLinkages.articleToTopics}`);

  // Health score calculation
  const baseScore = 100;
  const syntaxPenalty = totalErrors * 10;
  const warningPenalty = totalWarnings * 2;
  const healthScore = Math.max(0, Math.min(100, baseScore - syntaxPenalty - warningPenalty));

  console.log('\n========================================================================');
  console.log(` ENTERPRISE SCHEMA HEALTH SCORE: ${healthScore} / 100`);
  console.log('========================================================================');

  if (totalErrors > 0) {
    process.exit(1);
  }
}

audit();
