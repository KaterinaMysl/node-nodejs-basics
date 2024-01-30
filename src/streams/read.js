import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const read = fs.createReadStream(`${__dirname}/files/fileToRead.txt`);
    read.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
  };
  
  await read();
  