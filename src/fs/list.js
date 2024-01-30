import { dirname } from 'path';
import fs from "fs/promises";
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
  try {
    const name = await fs.readdir(`${__dirname}/files`, {recursive: true});
    console.log(name);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
