//Example input "1895, 1602,  1453, 1969, 1239, 1717, 1444, 1907, 1682, 1358, 1706, 1482, 1852, 1689, 1905, 1262, 1956, 770, 1507"
export function find2020(input) {

    var inputparts = input.split(/\n/);
    inputParts = inputparts.map(i => Number(i));
    const result = 2020;
    for (var i = 0; i < inputparts.length; i++) {
        let firstNum = inputparts[i];
        for (var j = i; j < inputparts.length; j++) {
            let secondNum = inputparts[j];
            for (var n = j; n < inputparts.length; n++) {
                let thirdNum = inputparts[n];
                if (firstNum + secondNum + thirdNum == result) {
                    console.log(firstNum * secondNum * thirdNum);
                }
            }
        }
    }
}
