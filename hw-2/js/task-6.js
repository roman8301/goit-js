'use strict';

const buttonTask6Ref = document.querySelector('#task6');

buttonTask6Ref.addEventListener('click', () => {
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
    const notANumber = Number.isNaN(input);

    if (notANumber) {
      console.log('Было введено не число, попробуйте еще раз');
      continue;
    }

    numbers.push(input);
  } while (true);

  for (const number of numbers) {
    total += number;
  }

  console.log(`Общая сумма чисел равна ${total}`);
});
