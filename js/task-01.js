// ?Задание
// Напиши скрипт, который выполнит следующие операции:

// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// !Решение

const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`, categoriesEl);


categoriesEl.forEach(category => {   
    const categoryNameEl = category.querySelector('h2');
    const categoryListEl = category.querySelector('ul');
    
    console.log(`Категория: ${categoryNameEl.textContent}.
    Количество элементов: ${categoryListEl.children.length}`)

})






