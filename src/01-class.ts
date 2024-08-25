const date = new Date();

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDateAcc = new MyDate(2022, 3, 13);
console.log('myDate', myDateAcc);
