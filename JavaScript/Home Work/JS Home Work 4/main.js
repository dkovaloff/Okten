//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// First option
function square(a, b) {
    let result = a * b;
    return result;
}
console.log(square(3, 4));

// Second option
let square1 = (a, b) => a * b;
console.log(square1(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// First option
function square3(r) {
    let result = Math.PI * Math.pow(r, 2);
    return result;
}
console.log(square3(7));

// Second option
let square4 = (r) => Math.PI * Math.pow(r, 2);
console.log(square4(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function square5(h, r) {
    let result = 2 * Math.PI * r * (h + r);
    return result;
}
console.log(square5(7, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [55, 89, 144, 233, 377, 610];
function draw(arr1) {
    for (let num of arr1) {
        console.log(num)
    }
}
draw(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(text) {
    document.write(`<p>${text}</p>`);
}
par('Lorem ipsum dolor sit amet.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function fun(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
    `)
}
fun('Culpa qui perspiciatis modi aperiam.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function x(text, quan) {
    document.write('<ul>');
    for (let i = 0; i < quan; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
x('Lorem ipsum dolor', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let set = [34, 'Lorem', 1.618, true, 67];
function list(settle) {
    document.write(`<ul>`);
    for (let roll of set) {
        document.write(`<li>${roll}</li>`);
    }
    document.write(`</ul>`);
}
list(set);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. 
// Для кожного об'єкту окремий блок.

let z = [
    {
        id: 1,
        name: 'Roma',
        age: 25
    },
    {
        id: 2,
        name: 'Ira',
        age: 23
    },
    {
        id: 3,
        name: 'Denis',
        age: 27
    },
]

let obj = function (arr) {
    for (const y of arr) {
        document.write(`<div>${y.id}. ${y.name} - ${y.age}</div>`)
    }
}
obj(z);

// - створити функцію яка повертає найменьше число з масиву

let setNum = [45, 4342, 45, 542, 71, 2.24, 146];
let minNum = function (rulArr) {
    let min = rulArr[0];
    for (let item of rulArr) {
        if (item < min) {
            min = item;
        }
    }
    return min
}
console.log(minNum(setNum));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numArr = [13, 24, 44, 23];
function sum(arr) {
    let sumArr = 0;
    for (let x of arr) {
        sumArr += x;
    }
    return sumArr;
}
console.log(sum(numArr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250