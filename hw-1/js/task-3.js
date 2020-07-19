'use strict';

alert('ЗАДАНИЕ 3');

const ADMIN_PASSWORD = 'qwerty';
let message;
message = prompt('Введите свой пароль:');

if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
