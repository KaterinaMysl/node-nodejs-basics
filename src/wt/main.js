import { Worker } from "node:worker_threads";
import os from "os";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const length = os.cpus().length;

const arr = [];

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    for (let i = 0; i <= length; i++) {
        const promise = new Promise(resolve => {
            const workerS = new Worker(`${__dirname}/worker.js`, {
                workerData: i + 10,
            });
            workerS.on("message", data => {
                resolve({
                    status: "resolved",
                    data: data,
                });
            });
            workerS.on("error", () => {
                resolve({
                    status: "error",
                    data: null,
                });
            });
        });
        arr.push(promise);
    };

    console.log(await Promise.all(arr));
};

await performCalculations();
