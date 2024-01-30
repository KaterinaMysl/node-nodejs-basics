import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createGunzip } from "zlib";

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const read = fs.createReadStream(`${__dirname}/files/archive.gz`);
    const write = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);
    read.pipe(createGunzip()).pipe(write);
};

await decompress();
