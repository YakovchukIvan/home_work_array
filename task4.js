"use strict"

const list__audience = document.querySelector('.list__audience')
const btnTask4 = document.querySelector('.btnTask4')

const classrooms = [
  { name: 'Аудиторія 1', capacity: 15, faculty: 'Факультет біології' },
  { name: 'Аудиторія 2', capacity: 12, faculty: 'Факультет астрономії' },
  { name: 'Аудиторія 3', capacity: 18, faculty: 'Факультет інозмених мов' },
  { name: 'Аудиторія 4', capacity: 10, faculty: 'Факультет робототехніки' },
];

function task4(classrooms) {
    for (let i = 0; i < classrooms.length; i++) {
        list__audience.insertAdjacentHTML("beforeend", `
            <li class="reviewStyle">
                ${classrooms[i].name} Місткість ${classrooms[i].capacity} сидінь ${classrooms[i].faculty} 
            </li>
        `); 
    }
}

if (btnTask4) {
  btnTask4.addEventListener('click', function() {
      task4(classrooms)
  });
}