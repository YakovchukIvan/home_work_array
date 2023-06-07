"use strict"

const list__audience = document.querySelector('.list__audience')
const btnTask4 = document.querySelector('.btnTask4')

const seacrh__block = document.querySelector('.seacrh__block')
const btn__search = document.querySelector('.btn__search')

const group__student = document.querySelector('.group__student')
const group1 = document.querySelector('.group1')
const group2 = document.querySelector('.group2')
const group3 = document.querySelector('.group3')
const group4 = document.querySelector('.group4')

const btn__alpha = document.querySelector('.btn__alpha')
const btn__numeric = document.querySelector('.btn__numeric')

const classrooms = [
  { name: 'Аудиторія 1', capacity: 15, faculty: 'біології' },
  { name: 'Аудиторія 2', capacity: 12, faculty: 'астрономії' },
  { name: 'Аудиторія 3', capacity: 18, faculty: 'економіки' },
  { name: 'Аудиторія 4', capacity: 10, faculty: 'астрономії' },
  { name: 'Аудиторія 5', capacity: 8, faculty: 'психології' },
  { name: 'Аудиторія 6', capacity: 200, faculty: 'економіки' },
  { name: 'Аудиторія 7', capacity: 60, faculty: 'інженерів' },
  { name: 'Аудиторія 8', capacity: 50, faculty: 'біології' },
  { name: 'Аудиторія 9', capacity: 40, faculty: 'інженерів' },
  { name: 'Аудиторія 10', capacity: 15, faculty: 'інженерів' },
  { name: 'Аудиторія 11', capacity: 25, faculty: 'економіки' },
  { name: 'Аудиторія 12', capacity: 12, faculty: 'астрономії' },
  { name: 'Аудиторія 13', capacity: 28, faculty: 'біології' },
];

const classOne = {
    name: 'Група 1',
    capacity: 15,
    faculty: 'біології'
}

const classTwo = {
    name: 'Група 2',
    capacity: 20,
    faculty: 'інженерів'
}

const classThree = {
    name: 'Група 3',
    capacity: 5,
    faculty: 'астрономії'
}

const classFour = {
    name: 'Група 4',
    capacity: 30,
    faculty: 'економіки'
}

function task4() {
    list__audience.innerHTML = '';

    for (let i = 0; i < classrooms.length; i++) {
        list__audience.insertAdjacentHTML("beforeend", `
            <li class="reviewAudience">
                <span>${classrooms[i].name}</span><span>Місткість ${classrooms[i].capacity} сидінь</span><span>Факультет ${classrooms[i].faculty} </span>
            </li>
        `); 
    }
    seacrh__block.style.display = 'flex'
    group__student.style.display = 'grid'
    btnTask4.textContent = 'Refresh'
    btn__alpha.style.display = 'block'    
    btn__numeric.style.display = 'block'

    // для пошуку вибраних аудиторії для вибраниг груп студентів
    group1.addEventListener('click', function() {
        seacrhAudity(classOne)
    });
    group2.addEventListener('click', function() {
        seacrhAudity(classTwo)       
    });
    group3.addEventListener('click', function() {
        seacrhAudity(classThree)
    });
    group4.addEventListener('click', function() {
        seacrhAudity(classFour)  
    });
    function seacrhAudity(classAudity) {
        list__audience.innerHTML = '';
        for (let i = 0; i < classrooms.length; i++) {
            if (classAudity.capacity <= classrooms[i].capacity && classAudity.faculty === classrooms[i].faculty) {
                list__audience.insertAdjacentHTML("beforeend", `
                    <li class="reviewAudience class__room">
                        <span>${classrooms[i].name}</span><span>Місткість ${classrooms[i].capacity} сидінь</span><span>Факультет ${classrooms[i].faculty} </span>
                    </li>
                `); 
            } else {
                list__audience.insertAdjacentHTML("beforeend", `
                    <li class="reviewAudience">
                        <span>${classrooms[i].name}</span><span>Місткість ${classrooms[i].capacity} сидінь</span><span>Факультет ${classrooms[i].faculty} </span>
                    </li>
                `); 
            }
        }
    }

}

// просто створюємо обєкт на сторінці по новому, але вже з вибраними аудиторіями
function displayClassroomsByFaculty() { 
    list__audience.innerHTML = '';
    const faltyInput = document.querySelector('.searchFacul');
    const faculty = faltyInput.value.toLowerCase(); // переводимо в нижній регістер input

    let hasMatch = false; // щоб коли невірно введені данні btn__search викидував alert

    for (let i = 0; i < classrooms.length; i++) {
        const classFaculty = classrooms[i].faculty.toLowerCase(); // переводимо все в нижній регістер щоб співпадало з input

        if (classFaculty === faculty) {
            list__audience.insertAdjacentHTML("beforeend", `
                <li class="reviewAudience class__room">
                    <span>${classrooms[i].name}</span><span>Місткість ${classrooms[i].capacity} сидінь</span><span>Факультет ${classrooms[i].faculty} </span>
                </li>
            `); 
            hasMatch = true;
        } else {
            list__audience.insertAdjacentHTML("beforeend", `
                <li class="reviewAudience">
                    <span>${classrooms[i].name}</span><span>Місткість ${classrooms[i].capacity} сидінь</span><span>Факультет ${classrooms[i].faculty} </span>
                </li>
            `); 
        }
    }

    if (!hasMatch) {
        alert('Не вірно введений факультет');
        faltyInput.value = ''
    }
}

btnTask4.addEventListener('click', function() {
    task4() // запускаєм завдання 4
}); 

btn__search.addEventListener('click', function() {
    displayClassroomsByFaculty() // пошук аудиторії
});

btn__numeric.addEventListener('click', function() {
    list__audience.innerHTML = '';
    let auditoriNumeric = classrooms.slice();
    auditoriNumeric.sort((a, b) => a.capacity - b.capacity);

    for (let i = 0; i < auditoriNumeric.length; i++) {
        list__audience.insertAdjacentHTML("beforeend", `
            <li class="reviewAudience">
                <span>${auditoriNumeric[i].name}</span><span class='class__room'>Місткість ${auditoriNumeric[i].capacity} сидінь</span><span>Факультет ${auditoriNumeric[i].faculty} </span>
            </li>
        `); 
    }

});

btn__alpha.addEventListener('click', function() {
    list__audience.innerHTML = '';
    let auditoriAlpha = classrooms.slice();

    auditoriAlpha.sort((a, b) => {
        const nameA = a.faculty.toUpperCase(); // Перетворення великих і малих літер не враховується при сортуванні
        const nameB = b.faculty.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    for (let i = 0; i < auditoriAlpha.length; i++) {
        list__audience.insertAdjacentHTML("beforeend", `
            <li class="reviewAudience">
                <span>${auditoriAlpha[i].name}</span><span>Місткість ${auditoriAlpha[i].capacity} сидінь</span><span class='class__room'>Факультет ${auditoriAlpha[i].faculty} </span>
            </li>
        `); 
    }
});