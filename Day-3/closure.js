// let name = 'random';
// let address = 'random address';

// export default function closure() {
//   console.log(name);
//   console.log(address);
// }

function print() {
  let i = 1;

  setInterval(() => {
    console.log(i);
    i++;
  }, 1000);
}

print();
