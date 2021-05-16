// ?Задание
// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате
// при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// !Решение

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputSizeChange);

function onInputSizeChange(event) {
    const fontSizeEl = `${event.currentTarget.value}px`
    textEl.style.fontSize = fontSizeEl;
}