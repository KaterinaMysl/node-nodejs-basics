import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        await fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, {
            errorOnExist: true,
            recursive: true,
        });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await copy();
