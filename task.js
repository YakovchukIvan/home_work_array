"use strict"

const list__item = document.querySelector('.list__item');

const shoppingList = [
  {
    name: 'Молоко',
    volumePack: '1 літра',
    status: 'не куплено'
  },
  {
    name: 'Йогур',
    volumePack: '4 пачки',
    status: 'не куплено'
  },
  {
    name: 'Сир',
    volumePack: '300 грам',
    status: 'куплено'
  },
  {
    name: 'Творог',
    volumePack: '2 пачки',
    status: 'куплено'
  },
  {
    name: 'Кава',
    volumePack: '1 пачка',
    status: 'куплено'
  },
  {
    name: 'Батон',
    volumePack: '1 буханка',
    status: 'не куплено'
  }
];


function tableStart() {
  // Виведення елементів зі статусом "куплено"
  for (let i = 0; i < shoppingList.length; i++) {
    let shopping = shoppingList[i];
    if (shopping.status === 'куплено') {
      list__item.insertAdjacentHTML("beforeend", `
        <li class="review">
          <p>${shopping.name}</p>
          <p>${shopping.status}</p>
          <p>${shopping.volumePack}</p>
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
          <p>${shopping.status}</p>
          <p>${shopping.volumePack}</p>
        </li>
      `);
    }
  }
}

tableStart()

const btn__add = document.querySelector('.btn__add')
const input_name = document.querySelector('.input__add-name')
const input_volume = document.querySelector('.input__add-volume')

function addProduct () {
  console.log("input_name:", input_name.value)
  console.log("input_volume:", input_volume.value)
}



btn__add.addEventListener("click", (event) => {
  event.preventDefault();

  console.log('Good');
  addProduct ()
  input_name.value = ''
  input_volume.value = ''
})