console.log(Math.PI);

class myMath {
  static readonly PI = 3.14;
  // constructor(public PI = 3.14) {}

  static max(...number: number[]) {
    return number.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log('MyMath', myMath.PI);

console.log('using max', myMath.max(12, 3, 4, 5, 6.4, 43, 1299));
console.log('using max', myMath.max(-1, -3, -5));
