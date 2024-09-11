const obj = {
  name: 'Salman',
  roll: 12,
};

console.log(Object.entries(obj));

function iterate(entries) {
  for (const [key, value] of entries) {
    console.log(key, value);
  }
}

iterate(Object.entries(obj));
