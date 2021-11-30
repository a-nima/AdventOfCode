export function rainRisk(input) {
    let inputLines = input.split(/\n/);
    var wp = [10, 1]; // x, y = WE / NS
    var ship = [0, 0]; // x, y = WE / NS

    for (const inputLine of inputLines) {
        let cmd = inputLine.substring(0, 1);
        let value = Number(inputLine.substring(1));

        switch (cmd) {
            case 'F':
                ship[0] += wp[0] * value;
                ship[1] += wp[1] * value;
                break;
            case 'L':
            case 'R':
                rotate(cmd, value);
                break;
            case 'N':
                wp[1] += value;
                break;
            case 'S':
                wp[1] -= value;
                break;
            case 'E':
                wp[0] += value;
                break;
            case 'W':
                wp[0] -= value;
                break;
        }

        console.log(inputLine);
        console.log(`Ship - ${ship[0] > 0 ? 'E' : 'W'}: ${Math.abs(ship[0])} ${ship[1] > 0 ? 'N' : 'S'}: ${Math.abs(ship[1])}`);
        console.log(`WayP - ${wp[0] > 0 ? 'E' : 'W'}: ${Math.abs(wp[0])} ${wp[1] > 0 ? 'N' : 'S'}: ${Math.abs(wp[1])}`);
        console.log('---------------------------------------------');
    }

    console.log(Math.abs(ship[0]) + Math.abs(ship[1]));

    function rotate(cmd, value) {
        let steps = value / 90;
        for (let i = 0; i < Math.abs(steps); i++) {
            // reverse positions
            let temp = wp.pop();
            wp.unshift(temp);

            if (cmd == 'L') {
                wp[0] *= -1;
            } else if (cmd == 'R') {
                wp[1] *= -1;
            }
        }

    }

}

