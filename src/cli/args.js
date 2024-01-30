const parseArgs = () => {
    const argv = process.argv.slice(2);
    const array = [];

    for (let i = 0; i < argv.length; i += 2) {
        array.push(argv.slice(i, i + 2));
    }

    const res = array.map(arr => {
        return arr.map((e) => {
            return e.replace(/^--/, '');
        }).join(' is ');
    });

    const result = res.join(', ')
    console.log(result);
};

parseArgs();