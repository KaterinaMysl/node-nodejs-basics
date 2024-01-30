import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const writeS = fs.createWriteStream(`${__dirname}/files/fileToWrite.txt`);
    process.stdin.pipe(writeS);
};

await write();
