import {Cell} from "../../../cell";
import {Game} from "../../../game";

const square1 = [
    new Cell(5, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(2, false),
    new Cell(1, false),
    new Cell(9, false),
    new Cell(8, false)
];

const square2 = [
    new Cell(6, false),
    new Cell(7, false),
    new Cell(8, false),
    new Cell(1, false),
    new Cell(9, false),
    new Cell(5, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(2, false)
];
const square3 = [
    new Cell(9, false),
    new Cell(1, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(8, false),
    new Cell(5, false),
    new Cell(6, false),
    new Cell(7, false),
];

const square4 = [
    new Cell(8, false),
    new Cell(5, false),
    new Cell(9, false),
    new Cell(4, false),
    new Cell(2, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(1, false),
    new Cell(3, false),
];

const square5 = [
    new Cell(7, false),
    new Cell(6, false),
    new Cell(1, false),
    new Cell(8, false),
    new Cell(5, false),
    new Cell(3, false),
    new Cell(9, false),
    new Cell(2, false),
    new Cell(4, false),
];

const square6 = [
    new Cell(4, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(7, false),
    new Cell(9, false),
    new Cell(1, false),
    new Cell(8, false),
    new Cell(5, false),
    new Cell(6, false),
];

const square7 = [
    new Cell(9, false),
    new Cell(6, false),
    new Cell(1, false),
    new Cell(2, false),
    new Cell(8, false),
    new Cell(7, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(5, false)
];


const square8 = [
    new Cell(5, false),
    new Cell(3, false),
    new Cell(7, false),
    new Cell(4, false),
    new Cell(1, false),
    new Cell(9, false),
    new Cell(2, false),
    new Cell(8, false),
    new Cell(6, false)
];


const square9 = [
    new Cell(2, false),
    new Cell(8, false),
    new Cell(4, false),
    new Cell(6, false),
    new Cell(3, false),
    new Cell(5, false),
    new Cell(1, false),
    new Cell(7, false),
    new Cell(9, false)
];


export const validWholeGame: Game = new Game([square1, square2, square3, square4, square5, square6, square7, square8, square9]);
export const invalidWholeGame: Game = new Game([square1, square2, square1, square1, square2, square1, square3, square4, square5]);

