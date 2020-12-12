export function encodingError(input) {
    //const testPreamble = 5;
    const preamble = 25;

    let currentIndex = preamble;
    input = input.split(/\n/).map(i => Number(i));

    while (currentIndex < input.length) {
        let relevantValues = input.slice(currentIndex - preamble, currentIndex);

        if (!isValid(input[currentIndex], relevantValues)) {
            console.log(input[currentIndex]);
            break;
        }
        currentIndex++;
    }

    let values = findConcurrentNumbers(currentIndex, input[currentIndex], input);
    values = values.sort((a, b) => a - b);
    console.log(values[0] + values[values.length - 1]);
}

function isValid(number, values) {
    for (let i = 0; i < values.length; i++) {
        const firstNum = values[i];
        for (let j = i; j < values.length; j++) {
            const secondNum = values[j]
            if (firstNum + secondNum == number) {
                return true;
            }
        }
    }
    return false;
}

function findConcurrentNumbers(numberIndex, number, values) {
    for (let startIndex = 0; startIndex < values.length; startIndex++) {
        const firstNum = values[startIndex];
        let sum = firstNum;
        for (let endIndex = startIndex + 1; endIndex < values.length; endIndex++) {
            const nextNum = values[endIndex];
            sum += nextNum;
            if (sum == number) {
                return values.slice(startIndex, endIndex + 1);
            }
        };
    }
}