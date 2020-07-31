'use strict';

alert(`ЗАДАНИЕ 2`);

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const addItem = inventory.add;
const removeItem = inventory.remove;

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  const actionFn = action.bind(inventory);
  actionFn(itemName);
};

invokeInventoryAction('Medkit', addItem);
console.log(inventory.items);

invokeInventoryAction('Gas mask', removeItem);
console.log(inventory.items);
