import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const pathC = path.join(__dirname, 'files', 'script.js',);
    const child = fork(pathC, args, { stdio: ['pipe', 'pipe', 'ignore', 'ipc'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};


spawnChildProcess(['someArgument1', 'someArgument2']);
