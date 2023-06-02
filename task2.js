"use strict"

const shoppingCheck = [
  { name: 'Молоко', quantity: 2, price: 25, count: 1 },
  { name: 'Хліб', quantity: 1, price: 10, count: 2 },
  { name: 'Яйця', quantity: 12, price: 2, count: 3 },
  { name: 'Сир', quantity: 1, price: 50, count: 4 },
  { name: 'Фрукти', quantity: 3, price: 15, count: 5 }
];

const list__check = document.querySelector('.list__check-item')
const all__summ = document.querySelector('.all__summ')
const min__summ = document.querySelector('.min__summ')
const max__summ = document.querySelector('.max__summ')
const medium__summ = document.querySelector('.medium__summ')



function checkStart() {
  list__check.innerHTML = '';

  // Виведення елементів зі статусом "куплено"
  for (let i = 0; i < shoppingCheck.length; i++) {
    let checkItem = shoppingCheck[i];

    list__check.insertAdjacentHTML("beforeend", `
    <li class="reviewCheck">
        <p>${checkItem.name}</p>
        <p><span class='status ${checkItem.count}'>${checkItem.quantity} шт</span></p>
        <p>${checkItem.price} грн</p>
    </li>
    `);
  }

  let resultAllSumm = 0;
  for (let j = 0; j < shoppingCheck.length; j++) {
    resultAllSumm += shoppingCheck[j].price;
    console.log(resultAllSumm);
  }
  all__summ.innerText = `${resultAllSumm} грн`

  // let resultMinSumm = 0;
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];

    
  // }

   
}

checkStart()








function startTime() {
    const timeSpan = document.querySelector('.timeSpan')

    const currDate = new Date();
    const hours = currDate.getHours().toString().padStart(2, '0');
    const minutes = currDate.getMinutes().toString().padStart(2, '0');
    const seconds = currDate.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const currentDate = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    timeSpan.textContent = timeString + ' ' + formattedDate;
}
startTime();// запускаємо функцію яка виводить годинник


