'use strict';

const buttonTask3Ref = document.querySelector('#task3');

buttonTask3Ref.addEventListener('click', () => {
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
  alert('Следующая строка');

  console.log(findLongestWord('Google do a roll'));
  console.log('**********');
  alert('Следующая строка');

  console.log(findLongestWord('May the force be with you'));
  console.log('**********');
});
