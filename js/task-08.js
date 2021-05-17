// ?Задание
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано
// в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире
// и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// !Решение
// Черновик
// const inputEl = document.querySelector('input');
// const btnRenderEl = document.querySelector('[data-action="render"]');
// const btnDestroyEl = document.querySelector('[data-action="destroy"]');
// const boxesEl = document.querySelector('#boxes');

// console.log(boxesEl);



// valueAsNumber  inputEl.valueAsNumber - значение счетчика.

// inputEl.addEventListener('input' , createBoxes )

// Для основной функции
// function createBoxes(amount) {
//     const arrBoxes = [];

//     console.log(inputEl.valueAsNumber);
// // const box = document.createElement('div');
// // console.dir(box.style);
// // box.style.height = '30px';
// // box.style.width = '30px';
// // box.style.backgroundColor = 'red';
// // box.style.margin = 'auto';

// // boxesEl.appendChild(box);
// }
// createBoxes(amountEl);
// Для основной функции

// const box = document.createElement('div');
// console.dir(box.style);
// box.style.height = '30px';
// box.style.width = '30px';
// box.style.backgroundColor = 'red';
// box.style.margin = 'auto';

// boxesEl.appendChild(box);






