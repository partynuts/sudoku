import { Cell } from "./cell";

export class Game {
  public data: Cell[][];

  constructor() {
    this.data = [];
  }

  generateInitialNumbers() {
    for (let i = 1; i <= 9; i++) {
      const block = new Array(9).fill(undefined).map(() => new Cell(null, false));
      for (let j = 1; j <= 3; j++) {
        block[Math.floor(Math.random() * 9)] = new Cell(Math.round(Math.random() * 8 + 1), true);
      }
      this.data.push(block)
    }
  }
}