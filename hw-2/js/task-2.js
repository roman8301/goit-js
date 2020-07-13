'use strict';

const buttonTask2Ref = document.querySelector('#task2');

buttonTask2Ref.addEventListener('click', () => {
  const calculateEngravingPrice = (message, pricePerWord) => {
    message = message.split(' ').length;
    return message * pricePerWord;
  };

  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
  console.log('**********');
  alert('Посчитать следующее значение');

  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
  console.log('**********');
  alert('Посчитать следующее значение');

  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40));
  console.log('**********');
  alert('Посчитать следующее значение');

  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20));
  console.log('**********');
  alert('Завершение вычислений');
});
