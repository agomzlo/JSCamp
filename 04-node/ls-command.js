import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

// 1. Get the directory path from command line arguments
const args = process.argv.slice(2);
const dirPath = args[0] ?? '.'; // Default to current directory if no path is provided

// 2. Simple format of size in bytes
const formatSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

// 3. Read the directory and get file, without information
const pathContents = await readdir(dirPath);

// 4. Get all file information and print it
const entries = await Promise.all(
    pathContents.map(async (fileName) => {
        const filePath = join(dirPath, fileName);
        const fileInfo = await stat(filePath);
        return { 
            name: fileName,
            isDir: fileInfo.isDirectory(),
            size: formatSize(fileInfo.size)
         };
    })
);

// 4.1. Sort files and directories by name, with directories listed first
entries.sort((a, b) => {
    if (a.isDir && !b.isDir) return -1;
    if (!a.isDir && b.isDir) return 1;
    return a.name.localeCompare(b.name);
});

//4.2. Detect if exist any flag on command line arguments
let filteredEntries = entries;
const onlyFiles = args.includes('--only-files');
const onlyDirs = args.includes('--only-dirs');

if (onlyFiles) filteredEntries = entries.filter(entry => !entry.isDir);
if (onlyDirs) filteredEntries = entries.filter(entry => entry.isDir);

// 5. Print files information in a formatted way
for (const entry of filteredEntries) {
    const type = entry.isDir ? 'DIR ' : 'FILE';
    const size = entry.isDir ? '' : ` - ${entry.size}`;
    console.log(`${type} ${entry.name.padEnd(25, ' ')} ${size}`);
}