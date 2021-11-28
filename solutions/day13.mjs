export function shuttleSearch(input) {
    let inputParts = input.split(/\n/);
    let earliestDeparture = Number(inputParts[0]);
    let busses = inputParts[1].split(',');
    let closestBus = [0, null];

    for (const bus of busses) {
        if (bus == 'x') {
            continue;
        }
        let waitTime = Number(bus) - (earliestDeparture % Number(bus));
        if (waitTime < closestBus[1] || !closestBus[1]) {
            closestBus = [Number(bus), waitTime];
        }
    }

    console.log("Part 1 answer: " + closestBus[0] * closestBus[1]);


    console.log(lcm(0, 17));


    let t = 0;
    let _lcm = 0;

    for (const index in busses) {
        if(busses[index] =='x') {
            continue;
        }

        let busID = Number(busses[index]);
        _lcm += lcm(_lcm, busID);

        t += _lcm + (busID - Number(index));
    }
    console.log(t);
    // let firstBus = busses[0];
    // let start = 100000000000000;
    // let remainder = firstBus - (start % firstBus);
    // let t = start + remainder;
    // let isSearching = true;
    // while (isSearching) {
    //     for (const index in busses) {
    //         if (busses[index] == 'x' || index == '0') {
    //             continue;
    //         }
            
    //         let busID = Number(busses[index]);
    //         let waitTime = t % busID;
    //         if (busID - waitTime != index ) {
    //             break;
    //         }
    //         if (index == busses.length - 1) {
    //             isSearching = false;
    //         }
    //     }
    //     t += Number(firstBus);
    // }
    // console.log(t);
}


function gcd(firstNum, secondNum) {
    // largerNumber
    let a = firstNum > secondNum ? firstNum : secondNum
    // smallerNum
    let b = firstNum < secondNum ? firstNum : secondNum;
    let gcd =  0;
    let remainder = a % b;

    while (remainder > 0 || remainder == undefined) {
        gcd = a % b;
        // console.log(`${a} = ${remainder}(mod ${b})`)
        a = b;
        b = remainder;
        remainder =  a % b
    }

    //console.log(gcd);
    return gcd;
}

function lcm(a, b) {
    let _gcd = gcd(a, b);
    if(_gcd == 0) {
        return a > b ? a  : b;
    } else {
        return a * b / _gcd
    }
}

function process(a, b) {

}