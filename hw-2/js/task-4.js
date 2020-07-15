'use strict';

const buttonTask4Ref = document.querySelector('#task4');

buttonTask4Ref.addEventListener('click', () => {
  const formatString = string => {
    const stringLengthMax = 40;
    if (string.length > stringLengthMax) {
      return string.slice(0, stringLengthMax) + '...';
    } else {
      return string;
    }
  };

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  alert('Оригинальная строка.\nСледующая проверка!');
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  alert('Строка обрезана.\nСледующая проверка!');
  console.log(formatString('Curabitur ligula sapien.'));
  alert('Оригинальная строка.\nСледующая проверка!');
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
  alert('Строка обрезана.');
});
