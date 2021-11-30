export function seatingSystem(input) {
    let changes = 1;
    let rows = input.split(/\n/).map(i => i.split(''));
    let newRows = [];
    let takenSeats = 0;

    while (changes > 0) {
        changes = 0;
        takenSeats = 0;
        for (let row = 0; row < rows.length; row++) {
            newRows[row] = [];
            for (let col = 0; col < rows[row].length; col++) {
                const seat = rows[row][col];
                newRows[row][col] = seat;
                if (seat == '.') {
                    continue;
                }
                //let takenSeatsCount = countAdjacentTakenSeats(row, col, rows);
                let takenSeatsCount = countOccupiedSeats(row, col, rows);

                if (seat == 'L' && takenSeatsCount == 0) {
                    newRows[row][col] = '#'
                    changes++;
                } else if (seat == '#' && takenSeatsCount >= 5) {
                    newRows[row][col] = 'L';
                    changes++;
                }

                if (seat == '#') {
                    takenSeats++;
                }
            }
            //console.log(newRows[row].join(''));
        }
        rows = [...newRows];
        newRows = [];
        //console.log('\n\n');
    }
    console.log(takenSeats);
}

// Second star 
function countOccupiedSeats(currentRow, currentCol, rows) {
    let takenSeats = 0;
    // Up
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [--r, c], rows) ? 1 : 0;
    // Up-Right
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [--r, ++c], rows) ? 1 : 0;
    // Up-Left
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [--r, --c], rows) ? 1 : 0;
    // Down
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [++r, c], rows) ? 1 : 0;
    // Right
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [r, ++c], rows) ? 1 : 0;
    // Left
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [r, --c], rows) ? 1 : 0;
    // Down-Right
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [++r, ++c], rows) ? 1 : 0;
    // Down-Left
    takenSeats += findOccupiedSeatInDirection(currentRow, currentCol, (r, c) => [++r, --c], rows) ? 1 : 0;

    return takenSeats;
}

function findOccupiedSeatInDirection(row, col, move, rows) {
    while (col >= 0 && col < rows[row].length && row >= 0 && row < rows.length) {
        [row, col] = move(row, col);
        if (row >= rows.length || row < 0 || col < 0 || col >= rows[row].length) {
            break;
        }

        if (rows[row][col] == '#') {
            return true;
        } else if (rows[row][col] == 'L') {
            break;
        }
    }

    return false;
}

function countAdjacentTakenSeats(currentRow, currentCol, rows) {
    let count = 0;

    for (let row = Math.max(currentRow - 1, 0); row <= Math.min(currentRow + 1, rows.length - 1); row++) {
        for (let col = Math.max(currentCol - 1, 0); col <= Math.min(currentCol + 1, rows[row].length - 1); col++) {
            const seat = rows[row][col];
            if (row == currentRow && col == currentCol) {
                continue;
            }

            if (seat == '#') {
                count++;
            }
        }
    }

    return count;
}