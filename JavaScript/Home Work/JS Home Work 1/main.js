// - Створити змінні.
// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a1 = 'hello';
let a2 = 'owu';
let a3 = 'com';
let a4= 'ua';
let a5 = 1;
let a6 = 10;
let a7 = -999;
let a8 = 123;
const PI = 3.14;
let a10 = 2.7;
let a11 = 16;
let a12 = true;
let a13 = false;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(PI);
console.log(a10);
console.log(a11);
console.log(a12);
console.log(a13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Dmytro';
let middleName = 'Mykolayovich';
let lastName = 'Kovalov';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100'
console.log(typeof b);

let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName1 = prompt('Enter your Name');
let middleName2 = prompt('Enter your MiddleName');
let age = +prompt('Enter your age');
let result2 = firstName1 + ' ' + middleName2 + ' ' + age;
console.log(result2);