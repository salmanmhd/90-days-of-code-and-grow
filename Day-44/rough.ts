function sum(a: number, b: number): number {
  return a + b;
}
// sum(1, 2);

function isAdult(age: number): boolean {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

const ansIsAdult: boolean = isAdult(19);
const ansIsAdult1 = isAdult(19); // this will use type interference and put the type

function sumOf3(c: number, fn: (a: number, b: number) => number): number {
  const d: number = fn(1, 2);
  return c + d;
}

interface Person {
  name: string;
  age: number;
  greet(greet: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(greet: string): void {
    console.log(`${greet} ${this.name}`);
  }
}

const aman = new Employee('aman', 22);
aman.greet('Hi there, ');

let user: string | number;

user = 12;
user = 'salman';
console.log(user);

const arr: (string | number)[] = [1, 'one'];

type car = {
  model: string;
};

interface objects {
  name: string;
}

interface objectone extends objects {
  num: number;
}

const abc: objectone = {
  name: 'hi there',
  num: 12,
};
