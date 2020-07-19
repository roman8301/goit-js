'use strict';

alert('ЗАДАНИЕ 3');

const findLongestWord = string => {
  string = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longestWord.length) {
      longestWord = string[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log('**********');

console.log(findLongestWord('Google do a roll'));
console.log('**********');

console.log(findLongestWord('May the force be with you'));
console.log('**********');
