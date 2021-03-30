import {Square} from "../game";

export function validateSquare(square: Square) {
    const filled = checkIfAllFieldsAreFilledWithNumbers(square);
    const unique = checkIfNumbersInSquareAreUnique(square);

    return filled && unique;
}

export function checkIfAllFieldsAreFilledWithNumbers(square: Square) {
    return square.every(cell => cell.number !== null);
}

export function checkIfNumbersInSquareAreUnique(square: Square) {
    const numbersOnly = square.map(cell => cell.number).filter(el => el);
    const uniqueNumbers = new Set(numbersOnly);

    return uniqueNumbers.size === numbersOnly.length;
}

