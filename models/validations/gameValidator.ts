import {Game} from "../game";

export function validateGame(game: Game): boolean {
    return checkIfAllFieldsAreFilled(game)
}

export function checkIfAllFieldsAreFilled(game: Game): boolean {
    const res = game.data.map(fieldArray => {
        return fieldArray.some(cell => cell.number === null)
    });

    return !res.some(el => el)
}

export function checkValidityOfSquares(game: Game) {

}

// export function checkIfNumbersInRowAreUnique(game: Game) {
//
// }
