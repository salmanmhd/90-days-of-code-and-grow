// const obj = {
//   name: 'Salman',
//   class: 'High',
//   count: 1,
// };

// console.log(obj);
// for (let index = 0; index <= 5; index++) {
//   if (obj.count) obj.count = obj.count + 1;
// }

// console.log(obj);

const arr = [
  {
    category: 'food',
    price: 12,
  },
  {
    category: 'chai',
    price: 100,
  },
  {
    category: 'fitness',
    price: 200,
  },
];

const newMap = new Map();
newMap.set('category', 'food');
newMap.set('totalSpent', 23);

newMap.set('totalSpent', newMap.get('totalSpent') + 20);
console.log(newMap);
