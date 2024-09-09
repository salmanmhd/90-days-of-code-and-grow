/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();
  if (str1.length !== str2.length) return false;

  // for (let i = 0; i < str1.length; i++) {
  //   str2 = str2.replace(str1[i], '');
  // }
  const str1Sorted = str1.split('').sort().join('');
  const str2Sorted = str2.split('').sort().join('');
  return str1Sorted === str2Sorted;
}

const str1 = 'abca';
const str2 = 'cab';

console.log(isAnagram(str1, str2));

module.exports = isAnagram;