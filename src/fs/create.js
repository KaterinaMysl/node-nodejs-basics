import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    try {
        await fs.writeFile(`${__dirname}/files/fresh.txt`, "I am fresh and young", { flag: 'wx' });
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await create();
