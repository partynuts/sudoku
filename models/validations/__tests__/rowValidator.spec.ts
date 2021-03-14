import {checkRowForUniqueness} from "../rowValidator";
import {invalidGameField, validGameField} from "./fixtures/game-fields";

describe('rowValidator', () => {
    describe('checkRowForUniqueness', () => {
        it('should return true if all numbers in one row are unique', () => {
            expect(checkRowForUniqueness(validGameField, 1)).toEqual(true);
            expect(checkRowForUniqueness(validGameField, 2)).toEqual(true);
            expect(checkRowForUniqueness(validGameField, 3)).toEqual(true);
            expect(checkRowForUniqueness(validGameField, 4)).toEqual(true);
        });

        it('should return false if there is at least one duplicate in a row', () => {
            expect(checkRowForUniqueness(invalidGameField, 1)).toEqual(false);
            expect(checkRowForUniqueness(invalidGameField, 2)).toEqual(false);
            expect(checkRowForUniqueness(invalidGameField, 3)).toEqual(false);
            expect(checkRowForUniqueness(invalidGameField, 4)).toEqual(false);
        })
    });
});
