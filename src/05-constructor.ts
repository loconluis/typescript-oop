export class MyDate {
  constructor(
    // definir propiedades, valores por defecto y accesso
    private _year: number = 2024,
    private _month: number = 8,
    private _day: number = 24
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    const year = this.addPadding(this._year);
    return `${day}/${month}/${year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }
  }
}
const dt = new MyDate(2024, 8, 12);
console.log('dt', dt.printFormat());
dt.add(2, 'days');
console.log('dt 2', dt.printFormat());
