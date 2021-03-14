import {Cell} from "../../cell";
import {
    checkIfAllFieldsAreFilledWithNumbers,
    checkIfNumbersInSquareAreUnique,
    validateSquare
} from "../squareValidator";

describe('squareValidator', () => {
    describe('checkIfNumbersInSquareAreUnique', () => {
        it('should return true if all 9 numbers are unique', () => {
            const square = [
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

            expect(checkIfNumbersInSquareAreUnique(square)).toBeTruthy();
        });

        it('should return false if one or more numbers are duplicates', () => {
            const square = [
                new Cell(1, false),
                new Cell(1, false),
                new Cell(3, false),
                new Cell(4, false),
                new Cell(5, false),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, false),
                new Cell(9, false)
            ];

            expect(checkIfNumbersInSquareAreUnique(square)).toEqual(false);

        });
    });

    describe('checkIfAllFieldsAreFilledWithNumbers', () => {
        it('should return true if all fields are filled', () => {
            const square = [
                new Cell(1, true),
                new Cell(3, false),
                new Cell(2, false),
                new Cell(4, false),
                new Cell(5, true),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, true),
                new Cell(9, false)
            ];

            expect(checkIfAllFieldsAreFilledWithNumbers(square)).toBeTruthy();
        });

        it('should return false if one or more fields are empty', () => {
            const square = [
                new Cell(1, true),
                new Cell(3, false),
                new Cell(null, false),
                new Cell(4, false),
                new Cell(5, true),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, true),
                new Cell(9, false)
            ];

            expect(checkIfAllFieldsAreFilledWithNumbers(square)).toBe(false);
        });
    });

    describe('validateSquare', () => {
        it('should return true if all fields are filled with a unique number', () => {
            const square = [
                new Cell(1, true),
                new Cell(3, false),
                new Cell(2, false),
                new Cell(4, false),
                new Cell(5, true),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, true),
                new Cell(9, false)
            ];

            expect(validateSquare(square)).toEqual(true);
        });

        it('should return false if not all fields are filled', () => {
            const square = [
                new Cell(1, true),
                new Cell(3, false),
                new Cell(null, false),
                new Cell(4, false),
                new Cell(5, true),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, true),
                new Cell(9, false)
            ];

            expect(validateSquare(square)).toEqual(false);
        });

        it('should return false if not all numbers are unique', () => {
            const square = [
                new Cell(1, true),
                new Cell(3, false),
                new Cell(3, false),
                new Cell(4, false),
                new Cell(5, true),
                new Cell(6, false),
                new Cell(7, false),
                new Cell(8, true),
                new Cell(9, false)
            ];

            expect(validateSquare(square)).toEqual(false);
        });
    });
});
