import {Game} from "../game";

export function checkColumnForUniqueness(game: Game, column: number) {
    const columnData = extractColumn(game, column);
    const onlyNumbers = columnData.map(cell => cell.number).filter(el => el)
    const uniqueNumbers = new Set(onlyNumbers);
    return uniqueNumbers.size === onlyNumbers.length
}

export function extractColumn(game: Game, column: number) {
    let columnData = [];

    const map = [
        {i: 0, j: 0},
        {i: 0, j: 1},
        {i: 0, j: 2},
        {i: 1, j: 0},
        {i: 1, j: 1},
        {i: 1, j: 2},
        {i: 2, j: 0},
        {i: 2, j: 1},
        {i: 2, j: 2},
    ];

    const config = map[column - 1];

    for (let i = config.i; i <= 8; i = i + 3) {
        for (let j = config.j; j <= 8; j = j + 3) {
            columnData.push(game.data[i][j])
        }
    }

    return columnData;
}



