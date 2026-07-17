import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesContent = fs.readFileSync(path.join(__dirname, 'lib/data/articles.ts'), 'utf8');
const lines = articlesContent.split('\n');
const articles = [];
let currentSlug = null;

for (let line of lines) {
    const sMatch = line.match(/slug:\s*["']([^"']+)["']/);
    if (sMatch) currentSlug = sMatch[1];
    
    const iMatch = line.match(/image:\s*["']([^"']+)["']/);
    if (iMatch && currentSlug) {
        articles.push({ slug: currentSlug, image: iMatch[1] });
        currentSlug = null;
    }
}

console.log(`Found ${articles.length} articles with hero/featured images.`);
let missingCount = 0;
for (const article of articles) {
    const imagePath = path.join(__dirname, 'public', article.image);
    if (!fs.existsSync(imagePath)) {
        console.log(`MISSING: Article '${article.slug}' points to '${article.image}' which does not exist.`);
        missingCount++;
    } else {
        console.log(`EXISTS: Article '${article.slug}' points to '${article.image}'`);
    }
}
console.log(`Total missing: ${missingCount}`);
