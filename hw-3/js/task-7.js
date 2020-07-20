'use strict';

const buttonTask1Ref = document.querySelector('#task1');

buttonTask1Ref.addEventListener('click', () => {
  'use strict';

  alert(`ЗАДАНИЕ 2\n Подсчет количества свойств объекта.`);

  const countProps = obj => {
    const keys = Object.keys(obj);
    return keys.length;
  };

  console.log(countProps({}));

  console.log(countProps({ name: 'Mango', age: 2 }));

  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
});
