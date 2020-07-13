'use strict';

const buttonTask2Ref = document.querySelector('#task2');

buttonTask2Ref.addEventListener('click', () => {
  const total = 100;
  let ordered = 20;
  if (ordered > total) {
    console.log('На складе недостаточно товаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  }

  alert('Изменяем количество товара');
  ordered = 50;
  if (ordered > total) {
    console.log('На складе недостаточно товаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  }

  alert('Изменяем количество товара');
  ordered = 100;
  if (ordered > total) {
    console.log('На складе недостаточно товаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  }

  alert('Изменяем количество товара');
  ordered = 150;
  if (ordered > total) {
    console.log('На складе недостаточно товаров!');
  } else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
  }
});
