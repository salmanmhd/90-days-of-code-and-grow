'use strict';
function sum(a, b) {
  return a + b;
}
// sum(1, 2);
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
const ansIsAdult = isAdult(19);
const ansIsAdult1 = isAdult(19); // this will use type interference and put the type
function sumOf3(c, fn) {
  const d = fn(1, 2);
  return c + d;
}
class Employee {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  greet(greet) {
    console.log(`${greet} ${this.name}`);
  }
}
const aman = new Employee('aman', 22);
aman.greet('Hi there, ');
let user;
user = 12;
user = 'salman';
console.log(user);
