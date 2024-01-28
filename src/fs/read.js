import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const readFile = await fs.readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8');
        console.log(readFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
