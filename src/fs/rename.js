import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    try {
        await fs.rename(
            `${__dirname}/files/wrongFilename.txt`,
            `${__dirname}/files/properFilename.md`
        );
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await rename();