export function adapterArray(input) {
    let adapters = input.split(/\n/).map(a => Number(a)).sort((a, b) => a - b);
    adapters.unshift(0);
    adapters.push(adapters[adapters.length - 1] + 3);

    let differencesCount = {
        1: 0,
        2: 0,
        3: 0
    };

    for (let index = 0; index < adapters.length - 1; index++) {
        differencesCount[adapters[index + 1] - adapters[index]]++;
    }
    console.log(differencesCount[1] * differencesCount[3]);

    let connections = [];
    let paths = [];

    for (let i = 0; i < adapters.length; i++) {
        let current = adapters[i];
        let nextIndex = i;
        let next = adapters[++nextIndex];
        connections[current] = [];
        paths[current] = 1;
        while (next <= current + 3) {
            connections[current].push(next);
            next = adapters[++nextIndex];
        }
    }

    for (let i = adapters.length - 1; i >= 0; i--) {
        const current = adapters[i];

        let totalPaths = 0;
        for (const connection of connections[current]) {
            totalPaths += paths[connection];
        }

        paths[current] = totalPaths > 0 ? totalPaths : 1;
        //console.log(`${current} - paths: ${totalPaths}`);
    }

    console.log(`Total paths: ${paths.shift()}`)
}
