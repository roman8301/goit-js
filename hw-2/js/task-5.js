'use strict';

const buttonTask5Ref = document.querySelector('#task5');

buttonTask5Ref.addEventListener('click', () => {
  const checkForSpam = message =>
    message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

  console.log(checkForSpam('Latest technology news'));
  alert('Следующая проверка!');
  console.log(checkForSpam('JavaScript weekly newsletter'));
  alert('Следующая проверка!');
  console.log(checkForSpam('Get best sale offers now!'));
  alert('Следующая проверка!');
  console.log(checkForSpam('[SPAM] How to earn fast money?'));
});
