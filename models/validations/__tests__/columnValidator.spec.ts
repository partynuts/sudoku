import {checkColumnForUniqueness} from "../columnValidator";
import {invalidGame} from "./fixtures/valid-game";
import {validColGame} from "./fixtures/game-fields";

describe('columnValidator', () => {
    describe('CheckColumnForUniqueness', () => {
        it('should return true if all numbers in one column are unique', () => {
            expect(checkColumnForUniqueness(validColGame, 1)).toEqual(true);
            expect(checkColumnForUniqueness(validColGame, 2)).toEqual(true);
            expect(checkColumnForUniqueness(validColGame, 3)).toEqual(true);
            expect(checkColumnForUniqueness(validColGame, 4)).toEqual(true);
        });

        it('should return false if there is at least one duplicate in a column', () => {
            expect(checkColumnForUniqueness(invalidGame, 1)).toEqual(false);
            expect(checkColumnForUniqueness(invalidGame, 2)).toEqual(false);
            expect(checkColumnForUniqueness(invalidGame, 3)).toEqual(false);
            expect(checkColumnForUniqueness(invalidGame, 4)).toEqual(false);
        })
    });
});
