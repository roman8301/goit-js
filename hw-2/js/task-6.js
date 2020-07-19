'use strict';

alert('ЗАДАНИЕ 6');

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }

  input = Number(input);

  if (Number.isNaN(input)) {
    console.log('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(input);
} while (true);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
