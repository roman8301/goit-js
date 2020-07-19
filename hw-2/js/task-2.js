'use strict';

alert('ЗАДАНИЕ 2');

const calculateEngravingPrice = (message, pricePerWord) => {
  message = message.split(' ').length;
  return message * pricePerWord;
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log('**********');

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log('**********');

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
console.log('**********');

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
console.log('**********');
