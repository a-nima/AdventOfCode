export function airplaneSeats(input) {
    let takenSeats = [];
    const maxRows = 128;
    const maxCols = 8;
    let maxSeatID = 0;
    for (const pass of input.split(/\n/)) {
        let rowStartIndex = 0;
        let colStartIndex = 0
        let rowLength = maxRows;
        let colLength = maxCols;
        for (const char of pass) {
            switch (char) {
                case 'F':
                    rowLength /= 2;
                    break;
                case 'B':
                    rowLength /= 2;
                    rowStartIndex += rowLength;
                    break;
                case 'R':
                    colLength /= 2;
                    colStartIndex += colLength;
                    break;
                case 'L':
                    colLength /= 2;
                    break;
            }
        }
        let seatId = (rowStartIndex * maxCols) + colStartIndex;
        takenSeats.push(seatId);

        maxSeatID = seatId > maxSeatID ? seatId : maxSeatID;
        //console.log(`row: ${rowStartIndex} col: ${colStartIndex} seat ID: ${seatId}`);
    }

    for (let seat = 1; seat < (maxRows * maxCols) - 1; seat++) {
        if(takenSeats.indexOf(seat) == -1 && takenSeats.indexOf(seat - 1) > -1 && takenSeats.indexOf(seat + 1) > -1 ) {
            console.log(`Your seat ID: ${seat}`);
        }
    }

    console.log(`Max seat ID: ${maxSeatID}`);
}