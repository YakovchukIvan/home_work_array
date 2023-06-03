"use strict"
import { checkStart } from './task2.js';

const list__item = document.querySelector('.list__item');
const btnTask2 = document.querySelector('.btnTask2')

export const shoppingList = [
  {
    name: 'молоко',
    quantity: 1,
    status: 'не куплено',
    price: 25,
    count: 0
  },
  {
    name: 'йогур',
    quantity: 1,
    status: 'не куплено',
    price: 10,
    count: 1
  },
  {
    name: 'сир',
    quantity: 1,
    status: 'куплено',
    price: 2,
    count: 2
  },
  {
    name: 'творог',
    quantity: 2,
    status: 'куплено',
    price: 50,
    count: 3
  },
  {
    name: 'кава',
    quantity: 1,
    status: 'куплено',
    price: 15,
    count: 4
  },
  {
    name: 'батон',
    quantity: '1',
    status: 'не куплено',
    price: 10,
    count: 5
  }
];


function addProduct(itemName, quantity, price) {
  // функція для додавання нового та існуючого товару

  console.log("input_name:", itemName)
  console.log("input_volume:", quantity)

  const existingItem = shoppingList.find(item => item.name.toLowerCase() === itemName.toLowerCase());
  if (existingItem) {
    existingItem.quantity += quantity;
    shoppingStart()
  } else {

    shoppingList.push({
      name: itemName,
      quantity: quantity,
      status: 'не куплено',
      price: price,
      count: shoppingList.length
    });
    console.log(shoppingList.length);
    shoppingStart()
    // list__item.insertAdjacentHTML("beforeend", `
    //     <li class="review">
    //       <p>${itemName}</p>
    //       <p><span class='status ${shoppingList.length}'>Не куплено</span></p>
    //       <p>${quantity}</p>
    //       <p>шт</p>
    //     </li>
    // `);
  }

  console.log(shoppingList);
}

function shoppingStart() {
  list__item.innerHTML = '';

  // Виведення елементів зі статусом "куплено"
  for (let i = 0; i < shoppingList.length; i++) {
    let shopping = shoppingList[i];
    if (shopping.status === 'куплено') {
      list__item.insertAdjacentHTML("beforeend", `
        <li class="review">
          <p>${shopping.name}</p>
          <p><span class='status ${shopping.count}'>${shopping.status}</span></p>
          <p>${shopping.quantity}</p>
          <p>шт</p>
        </li>
      `);
    }
  }

  // Виведення елементів зі статусом "не куплено"
  for (let i = 0; i < shoppingList.length; i++) {
    let shopping = shoppingList[i];
    if (shopping.status === 'не куплено') {
      list__item.insertAdjacentHTML("beforeend", `
        <li class="review">
          <p>${shopping.name}</p>
          <p><span class='status ${shopping.count}'>${shopping.status}</span></p>
          <p>${shopping.quantity}</p>
          <p>шт</p>
        </li>
      `);
    }
  }


  const statusElements = document.querySelectorAll('.status');

  statusElements.forEach((statusElement) => {
    statusElement.addEventListener('click', () => {
      // Отримуємо count з класу елемента
      const count = statusElement.classList[1];

      // Знаходимо відповідний товар за count
      const item = shoppingList.find((shopping) => shopping.count == count);

      // Змінюємо статус товару
      item.status = (item.status === 'не куплено') ? 'куплено' : 'не куплено';

      // Оновлюємо відображення статусу
      statusElement.textContent = item.status;
      console.log(shoppingList);
      shoppingStart();
    });
  });
}

shoppingStart()

const btn__add = document.querySelector('.btn__add')
const input_name = document.querySelector('.input__add-name')
const input_volume = document.querySelector('.input__add-volume')
const input__price = document.querySelector('.input__add-price')

btn__add.addEventListener("click", (event) => {
  event.preventDefault();

  const volume = parseInt(input_volume.value);
  const price = parseInt(input_volume.value);

  addProduct (input_name.value, volume, price)
  input_name.value = ''
  input_volume.value = ''
  input__price.value = ''

});

if (btnTask2 && !btnTask2.onclick) {
  btnTask2.addEventListener('click', function() {
    // Решта коду обробника події...
    const allPurchased = shoppingList.every(item => item.status === 'куплено');
    if(allPurchased) {
      checkStart();
    } else {
        alert('Потрібно купити всі продукти');
    }
  });
}

