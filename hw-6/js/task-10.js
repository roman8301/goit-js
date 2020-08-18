'use strict';

console.group(`ЗАДАНИЕ 10`);
import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter((skill, index, allSkills) => allSkills.indexOf(skill) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

console.groupEnd();
