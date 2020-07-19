'use strict';

alert('ЗАДАНИЕ 4');

const formatString = string => {
  const stringLengthMax = 40;
  if (string.length > stringLengthMax) {
    return string.slice(0, stringLengthMax) + '...';
  } else {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
