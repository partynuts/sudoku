import {Cell} from "../../../cell";
import {Game} from "../../../game";

const square1 = [
    new Cell(1, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(5, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(8, false),
    new Cell(9, false)
];

const square2 = [
    new Cell(4, false),
    new Cell(5, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(8, false),
    new Cell(9, false),
    new Cell(1, false),
    new Cell(2, false),
    new Cell(3, false)
];

const square3 = [
    new Cell(7, false),
    new Cell(8, false),
    new Cell(9, false),
    new Cell(1, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(5, false),
    new Cell(6, false),
];

const square12 = [
    new Cell(1, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(2, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(3, false),
    new Cell(4, false),
    new Cell(5, false)
]

const square42 = [
    new Cell(4, false),
    new Cell(5, false),
    new Cell(6, false),
    new Cell(5, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(6, false),
    new Cell(7, false),
    new Cell(8, false)
]

const square72 = [
    new Cell(7, false),
    new Cell(8, false),
    new Cell(9, false),
    new Cell(8, false),
    new Cell(9, false),
    new Cell(1, false),
    new Cell(9, false),
    new Cell(1, false),
    new Cell(2, false)
]

// const square4 = [
//     new Cell(1, false),
//     new Cell(4, false),
//     new Cell(7, false),
//     new Cell(2, false),
//     new Cell(5, false),
//     new Cell(8, false),
//     new Cell(3, false),
//     new Cell(6, false),
//     new Cell(9, false)
// ]

export const validGameField: Game = new Game([square1, square2, square3, square1, square2, square3]);
export const invalidGameField: Game = new Game([square1, square2, square1, square1, square2, square1]);
export const validColGame: Game = new Game([square12, square12, square12, square42, square42, square42, square72, square72, square72])

