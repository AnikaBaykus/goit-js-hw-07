// ?Задание
// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций
// и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// !Решение
let counterValue = document.querySelector("#value");
let result = 0;

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');


buttonMinus.addEventListener('click', decrement);
buttonPlus.addEventListener('click', increment);


function decrement() {
     result -= 1;
    counterValue.textContent = result;  
};

function increment() {
     result += 1;
     counterValue.textContent = result;
}












