import fs from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const read = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`);
    const write = fs.createWriteStream(`${__dirname}/files/archive.gz`);
    read.pipe(createGzip()).pipe(write);
};

await compress();
