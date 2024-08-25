export class Animal {
  constructor(protected name: string) {}

  move() {
    console.log(`${this.name} is moving`);
  }

  greeting() {
    return `Hello, Im ${this.name}`;
  }
}
// extends
export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('index', index);
      console.log('Woof');
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());

const firu = new Dog('Firu', 'Luis');
firu.move();
console.log(firu.greeting());
firu.bark(3);
// firu.name =>> is not accessible is protected only child can use it
