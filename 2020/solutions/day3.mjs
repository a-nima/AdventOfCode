export function slopes(input) {
    let map = [];
    input = input.split(/\n/).map(i => i.split(''));

    let slopes = [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 },
    ];

    let treesEncountered = 0;
    let allSLopesTreesEncountered = 0;

    for (let i = 0; i < slopes.length; i++) {
        const slope = slopes[i];

        let row = 0;
        let col = 0;

        while (true) {
            let colLength = input[row].length;
            col = (col + slope.right) % colLength;
            row += slope.down;
            if (row >= input.length) {
                break;
            }
            const pos = input[row][col];
            if (pos == '#') {
                treesEncountered++;
            }
        }
        allSLopesTreesEncountered = allSLopesTreesEncountered == 0 ? treesEncountered : allSLopesTreesEncountered *= treesEncountered;
        console.log(treesEncountered);
        treesEncountered = 0;
    }

    console.log(allSLopesTreesEncountered)
}