export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    const year = this.addPadding(this.year);
    return `${day}/${month}/${year}`;
  }

  addPadding(value: number) {
    // this method is public outside the class
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}
const dt = new MyDate(2024, 8, 12);
console.log('dt', dt.printFormat());
dt.add(2, 'days');
console.log('dt 2', dt.printFormat());
