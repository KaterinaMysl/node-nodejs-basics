import { Transform } from "node:stream";

const transform = async () => {
    const reverseS = new Transform({
        transform(chunk, _, callback) {
            const reverse = chunk
                .toString()
                .split("")
                .reverse()
                .join("");
            this.push(reverse);
            callback();
        },
    });

    process.stdin.pipe(reverseS).pipe(process.stdout);
};

await transform();