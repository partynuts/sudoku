import {Game} from "../game";
import {validateSquare} from "./squareValidator";
import {checkRowForUniqueness} from "./rowValidator";
import {checkColumnForUniqueness} from "./columnValidator";

export function validateGame(game: Game): boolean {
    return checkIfAllFieldsAreFilled(game) &&
        checkValidityOfSquares(game) &&
        checkValidityOfRows(game) &&
        checkValidityOfColumns(game)
}

export function checkIfAllFieldsAreFilled(game: Game): boolean {
    const res = game.data.map(fieldArray => {
        return fieldArray.some(cell => cell.number === null)
    });

    return !res.some(el => el)
}

export function checkValidityOfSquares(game: Game) {
    return game.data.every(validateSquare);
}

export function checkValidityOfRows(game: Game) {
    let res = [];
    for (let row = 1; row <= 9; row++) {
        res.push(checkRowForUniqueness(game, row));
    }
    return res.every(el => el);
}

export function checkValidityOfColumns(game: Game) {
    let res = [];
    for (let column = 1; column <= 9; column++) {
        res.push(checkColumnForUniqueness(game, column))
    }

    return res.every(el => el);
}
