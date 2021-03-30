import {Cell} from "./cell";
import {checkIfNumbersInSquareAreUnique, validateSquare} from "./validations/squareValidator";
import {checkColumnForUniqueness} from "./validations/columnValidator";
import {checkRowForUniqueness} from "./validations/rowValidator";

export type Square = Cell[]

export class Game {
    public data: Square[];

    constructor(data: Square[] = []) {
        this.data = data;
    }

    generateInitialNumbers() {
        do {
            this.data = [];
            for (let i = 1; i <= 9; i++) {
                const block = new Array(9).fill(undefined).map(() => new Cell(null, false));
                for (let j = 1; j <= 3; j++) {
                    block[Math.floor(Math.random() * 9)] = new Cell(Math.round(Math.random() * 8 + 1), true);
                }
                this.data.push(block)
            }
        } while (!checkInitialNumbers(this))
    }
}

function checkInitialNumbers(game: Game) {
    let uniqueColumns = [];
    let uniqueRows = [];

    for (let i = 1; i <= 9; i++) {
        uniqueColumns.push(checkColumnForUniqueness(game, i));
        uniqueRows.push(checkRowForUniqueness(game, i));
    }

    // console.log({
    //     square: game.data.some(square => !checkIfNumbersInSquareAreUnique(square)),
    //     column: uniqueColumns.some(el => !el),
    //     row: uniqueRows.some(el => !el)
    // });

    if (game.data.some(square => !checkIfNumbersInSquareAreUnique(square))) {
        return false;
    }
    if (uniqueColumns.some(el => !el)) {
        return false
    }
    if (uniqueRows.some(el => !el)) {
        return false
    }
    return true
}
