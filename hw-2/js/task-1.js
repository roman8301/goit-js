'use strict';

alert('ЗАДАНИЕ 1');
const logItems = array => {
  for (let i = 0; i < array.length; i += 1) {
    let numberElement = i + 1;
    let nameElement = array[i];
    console.log(`${numberElement} - ${nameElement}`);
  }
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log('**********');
alert('Теперь выведем цифровой массив');
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log('**********');
