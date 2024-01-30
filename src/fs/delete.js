import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    try {
        await fs.rm(`${__dirname}/files/fileToRemove.txt`);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
