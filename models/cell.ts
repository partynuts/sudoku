export class Cell {
  public number;
  public readOnly ;

  constructor(number: number | null, readOnly: boolean) {
    this.number = number;
    this.readOnly = readOnly
  }
}
