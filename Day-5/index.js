const a = { 1: 'a', 2: 'b' };

const b = {
  3: 'c',
  4: 'd',
  5: 'e',
};

const copiedObj = Object.assign({}, a, b);

// console.log(copiedObj);
// console.log(a);

const stringObj = b.toLocaleString();

// console.log(stringObj);

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming', 'coding'],
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const { firstName: name, lastName, age } = person;

// console.log(name, lastName, age);

function userDetails() {
  console.log(this);
}
// userDetails();
const obj1 = {
  name: 'salman',
  id: 123,

  userDetails: function () {
    console.log(this);
  },
  city: 'New Delhi',
  hometown: 'Patna',
  userDetails1: function () {
    console.log(this);
  },
};

// obj1.userDetails();
// obj1.userDetails1();

// console.log(this);

const arrowF = () => console.log(this);

arrowF();
