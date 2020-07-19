'use strict';

alert('ЗАДАНИЕ 5');

const checkForSpam = message => {
  const spamWord = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  return spamWord;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
