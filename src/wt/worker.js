import { parentPort, workerData } from 'node:worker_threads';

const number = k => k < 2 ? k : number(k - 1) + number(k - 2);
const sendResult = () => parentPort.postMessage(number(workerData));

sendResult();
