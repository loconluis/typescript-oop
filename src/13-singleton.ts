export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static getInstance(name: string) {
    if (MyService.instance === null) {
      console.log('Generando la instancia');
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const ms = MyService.getInstance('Service 1');
console.log('ms', ms.getName());
const ms1 = MyService.getInstance('Service 2');
console.log('ms1', ms1.getName());
const ms2 = MyService.getInstance('Service 3');
console.log('ms2', ms2.getName());
