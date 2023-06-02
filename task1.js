"use strict"

const list__item = document.querySelector('.list__item');

const shoppingList = [
  {
    name: 'молоко',
    volumePack: 1,
    status: 'не куплено',
    count: 0
  },
  {
    name: 'йогур',
    volumePack: 1,
    status: 'не куплено',
    count: 1
  },
  {
    name: 'сир',
    volumePack: 1,
    status: 'куплено',
    count: 2
  },
  {
    name: 'творог',
    volumePack: 2,
    status: 'куплено',
    count: 3
  },
  {
    name: 'кава',
    volumePack: 1,
    status: 'куплено',
    count: 4
  },
  {
    name: 'батон',
    volumePack: '1',
    status: 'не куплено',
    count: 5
  }
];


function addProduct(itemName, quantity) {
  // функція для додавання нового та існуючого товару

  console.log("input_name:", itemName)
  console.log("input_volume:", quantity)

  const existingItem = shoppingList.find(item => item.name.toLowerCase() === itemName.toLowerCase());
  if (existingItem) {
    existingItem.volumePack += quantity;
    tableStart()
  } else {

    shoppingList.push({
      name: itemName,
      volumePack: quantity,
      status: 'не куплено',
      count: shoppingList.length
    });
    console.log(shoppingList.length);
    tableStart()
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

function tableStart() {
  list__item.innerHTML = '';

  // Виведення елементів зі статусом "куплено"
  for (let i = 0; i < shoppingList.length; i++) {
    let shopping = shoppingList[i];
    if (shopping.status === 'куплено') {
      list__item.insertAdjacentHTML("beforeend", `
        <li class="review">
          <p>${shopping.name}</p>
          <p><span class='status ${shopping.count}'>${shopping.status}</span></p>
          <p>${shopping.volumePack}</p>
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
          <p>${shopping.volumePack}</p>
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
      tableStart();
    });
  });

}

tableStart()

const btn__add = document.querySelector('.btn__add')
const input_name = document.querySelector('.input__add-name')
const input_volume = document.querySelector('.input__add-volume')


btn__add.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('Good');

  const volume = parseInt(parseInt(input_volume.value));
  addProduct (input_name.value, volume)
  input_name.value = ''
  input_volume.value = ''
})

