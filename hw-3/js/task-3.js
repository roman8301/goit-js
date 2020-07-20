'use strict';
alert(`ЗАДАНИЕ 3\n Нахождение самого продуктивного сотрудника.`);

const findBestEmployee = function (employees) {
  let bestWorker;
  let bestResult = 0;
  for (let employee in employees) {
    if (employees[employee] > bestResult) {
      bestWorker = employee;
      bestResult = employees[employee];
    }
  }
  return `${bestWorker}: ${bestResult}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
