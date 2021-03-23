import {Game} from "../../game";
import {Cell} from "../../cell";
import {checkIfAllFieldsAreFilled, validateGame} from "../gameValidator";
import {invalidWholeGame, validWholeGame} from "./fixtures/game";

describe('gameValidator', () => {
    describe('checkIfAllFieldsAreFilled', () => {
        it('should return true if all cells are filled', () => {
            const game = new Game([[new Cell(4, false)]]);

            expect(checkIfAllFieldsAreFilled(game)).toBeTruthy();
        });

        it('should return false if one cell is empty', () => {
            const game = new Game([[new Cell(null, false)]]);

            expect(checkIfAllFieldsAreFilled(game)).toBeFalsy();
        })
    });

    describe('validateGame', () => {
        it('should return true in success case', () => {
            expect(validateGame(validWholeGame)).toBeTruthy();
        });
        it('should return false in failure case', () => {
            expect(validateGame(invalidWholeGame)).toBeFalsy();
        });
    });
});
