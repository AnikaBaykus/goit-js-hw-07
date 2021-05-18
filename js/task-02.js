// ?Задание

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.Для
// создания DOM - узлов используй document.createElement().

// !Решение

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Вариант 1
// const listEl = document.querySelector('#ingredients');
// const ingredientsEl = [];

// ingredients.forEach(ingredient => {
//   const ingredientEl = document.createElement('li');
//   console.log(ingredientEl)
//   ingredientEl.textContent = ingredient;
//   ingredientsEl.push(ingredientEl)
// });
// console.log(ingredientsEl)

// listEl.append(...ingredientsEl);

// Вариант 2
// const listEl = document.querySelector('#ingredients');
 
// function createArrIngredients(arr) {
//    return ingredients.map(ingredient => {
//     const ingredientEl = document.createElement('li');
//     ingredientEl.textContent = ingredient;
//      return ingredientEl;
//   }); 
// }

// listEl.append(...createArrIngredients(ingredients));

// Вариант 3
const listEl = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.innerHTML = ingredient;
  return ingredientEl;
});

listEl.append(...ingredientsEl);
