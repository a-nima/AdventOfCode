export function handheldHalting(input) {
    const instructions = input.split(/\n/);

    for (let index = 0; index < instructions.length; index++) {
        const instructionParts = instructions[index].split(" ");
        const instruction = instructionParts[0];
        const value = Number(instructionParts[1]);
        let keyword;
        if (instruction == 'nop') {
            keyword = 'jmp';
        } else if (instruction == 'jmp') {
            keyword = 'nop';
        }

        if (keyword) {
            let testInstructions = [...instructions];
            testInstructions[index] = keyword + " " + value;
            const accumulator = findPath(testInstructions);
            if (accumulator) {
                console.log(accumulator);
                break;
            }
        }
    }
}

function findPath(instructions) {
    let accumulator = 0;
    let passedIndexes = [];
    for (let index = 0; index < instructions.length; index++) {
        const instructionParts = instructions[index].split(" ");
        const instruction = instructionParts[0];
        const value = Number(instructionParts[1]);
        let newIndex = index;

        switch (instruction) {
            case 'acc':
                accumulator += value
                break;
            case 'jmp':
                newIndex += value - 1;
                break;
        }

        if (passedIndexes.indexOf(newIndex) > -1) {
            return null;
        }

        index = newIndex;
        passedIndexes.push(index);
    }

    return accumulator;
}