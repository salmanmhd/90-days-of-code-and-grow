const twoFer = (name) => {
  let otherName;
  name ? (otherName = name) : (otherName = 'you');

  //   if (name) {
  //     otherName = name;
  //   } else {
  //     otherName = 'you';
  //   }

  return `One for ${otherName}, one for me.`;
};

console.log(twoFer('Alice')); // One for Alice, one for me.
console.log(twoFer()); // One for Alice, one for me.
