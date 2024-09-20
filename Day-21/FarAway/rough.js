const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Laptop', quantity: 1, packed: false },
  { id: 4, description: 'Charger', quantity: 1, packed: false },
  { id: 5, description: 'Toothbrush', quantity: 1, packed: true },
  { id: 6, description: 'Shampoo', quantity: 1, packed: false },
];
console.log('original: ', initialItems);

const q = [...initialItems].sort((a, b) => a.quantity - b.quantity);

const p = [...initialItems].sort((a, b) => b.packed - a.packed);
console.log('sorted: ', p);

// const input = initialItems.sort((a, b) =>
//   a.description.localeCompare(b.description)
// );
// console.log(initialItems);
// console.log(input);
