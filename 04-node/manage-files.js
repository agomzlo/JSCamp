import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const content = await readFile('file.txt', 'utf-8');
console.log(content);

const outputDir = join('output', 'node', 'manage-files');
await mkdir(outputDir, { recursive: true });

const newContent = content.toUpperCase();
const outputPath = join(outputDir, 'updated-file.txt');

await writeFile(outputPath, newContent);
console.log('File has been updated with uppercase content.');
console.log(`File saved at: ${outputPath} with extension: ${extname(outputPath)} and basename: ${basename(outputPath)}`);