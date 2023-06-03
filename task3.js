"use strict"

const list__style = document.querySelector('.list__style-item')
const btnTask3 = document.querySelector('.btnTask3')

const cssStyles = [
  { name: 'color', value: 'red' },
  { name: 'font-size', value: '16px' },
  { name: 'text-align', value: 'center' },
  { name: 'text-decoration', value: 'underline' }
];

function task3(style) {
    list__style.insertAdjacentHTML("beforeend", `
    <li class="reviewStyle">
        <p><span style='${style[0].name}: ${style[0].value}'>${style[0].name}: ${style[0].value}</span></p>
        <p><span style='${style[1].name}: ${style[1].value}'>${style[1].name}: ${style[1].value}</span></p>
        <p><span style='${style[2].name}: ${style[2].value}'>${style[2].name}: ${style[2].value}</span></p>
        <p><span style='${style[3].name}: ${style[3].value}'>${style[3].name}: ${style[3].value}</span></p>
    </li>
    `);
}

if (btnTask3) {
  btnTask3.addEventListener('click', function() {
      task3(cssStyles)
  });
}