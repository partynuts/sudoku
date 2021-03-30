import {Game} from "../game";

export function checkRowForUniqueness(game: Game, row: number) {
    const rowData = extractRow(game, row);
    const onlyNumbers = rowData.map(cell => cell.number).filter(el => el);
    const uniqueNumbers = new Set(onlyNumbers);
    return uniqueNumbers.size === onlyNumbers.length
}

export function extractRow(game: Game, row: number) {
    let rowData = [];

    const map = [
        {i: 0, j: 0},
        {i: 0, j: 3},
        {i: 0, j: 6},
        {i: 3, j: 0},
        {i: 3, j: 3},
        {i: 3, j: 6},
        {i: 6, j: 0},
        {i: 6, j: 3},
        {i: 6, j: 6},
    ];
    const config = map[row-1];

    for(let i = config.i; i <= config.i + 2; i++) {
        for(let j = config.j; j <= config.j + 2; j++) {
            rowData.push(game.data[i][j]);
        }
    }

    return rowData;
}
