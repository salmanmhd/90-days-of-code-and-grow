/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// 97 - 122

function isPalindrome(str) {
  str = str.toLowerCase().trim();
  let firstIndex = 0;
  let lastIndex = str.length - 1;
  console.log(str);
  while (firstIndex < lastIndex) {
    while (
      firstIndex < lastIndex &&
      (str[firstIndex].charCodeAt(0) < 97 ||
        str[firstIndex].charCodeAt(0) > 122)
    ) {
      firstIndex++;
    }

    // Skip non-alphabetical characters from the back
    while (
      firstIndex < lastIndex &&
      (str[lastIndex].charCodeAt(0) < 97 || str[lastIndex].charCodeAt(0) > 122)
    ) {
      lastIndex--;
    }

    if (str[firstIndex] === str[lastIndex]) {
      firstIndex++;
      lastIndex--;
    } else {
      return false;
    }
  }
  console.log(str);
  return true;
}

const str = 'Able, was I ere I saw Elba!';
const str1 = 'Eva, can I see bees in a cave?';

console.log(isPalindrome(str1));

module.exports = isPalindrome;
