'use strict';

alert(`ЗАДАНИЕ 1\n Добавление, изменение и вывод свойств объекта.`);

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  Object.keys(user);
  user[key];
  console.log(`${key}: ${user[key]}`);
}
