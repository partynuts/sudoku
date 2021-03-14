import {Game} from "../game";

export function checkRowForUniqueness(game: Game, row: number) {
    const rowData = extractRow(game, row);
    const uniqueNumbers = new Set(rowData.map(cell => cell.number));
    return uniqueNumbers.size === rowData.length
}

export function extractRow(game: Game, row: number) {
    let rowData = [];

    if (row === 1) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j <= 2; j++) {
                rowData.push(game.data[i][j]);
            }
        }
    }
    if (row === 2) {
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j <= 5; j++) {
                rowData.push(game.data[i][j]);
            }
        }
    }
    if (row === 3) {
        for (let i = 0; i < 3; i++) {
            for (let j = 6; j <= 8; j++) {
                rowData.push(game.data[i][j]);
            }
        }
    }
    if (row === 4) {
        for (let i = 3; i <= 5; i++) {
            for (let j = 0; j <= 2; j++) {
                rowData.push(game.data[i][j]);
            }
        }
    }

    return rowData;
}
