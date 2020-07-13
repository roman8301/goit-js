'use strict';

const buttonTask1Ref = document.querySelector('#task1');

buttonTask1Ref.addEventListener('click', () => {
  const name = 'Генератор защитного поля';
  let prise = 1000;
  console.log(`Выбран ${name}, цена за штуку ${prise} кредитов`);
  alert('Увеличиваем цену генератора');

  prise *= 2;
  console.log(`Выбран ${name}, цена за штуку ${prise} кредитов`);
});
