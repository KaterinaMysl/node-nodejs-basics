const parseEnv = () => {
    const string = Object.entries(process.env).filter((arr) => {
        return arr[0].startsWith('RSS_');
    })
        .map((arr) => {
            return arr.join('=');
        }).join('; ');
    console.log(string);
};

parseEnv();
