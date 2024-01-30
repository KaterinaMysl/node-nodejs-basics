import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const hash = createHash('SHA256');
    const readStream = fs.createReadStream(`${__dirname}/files/fileToCalculateHashFor.txt`);

    readStream.on('data', (chunk) => hash.update(chunk));
    readStream.on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();
