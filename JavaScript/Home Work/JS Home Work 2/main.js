// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[0] = 'Lorem';
arr[1] = 100500;
arr[2] = true;
arr[3] = 'amet';
arr[4] = 67;
arr[5] = false;
arr[6] = 'consectetur';
arr[7] = 637;
arr[8] = 'adipisicing';
arr[9] = 'elit';

console.log(arr.length);
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Candy House',
    pageCount: 245,
    genre: 'fantasy'
}
console.log(book1);

let book2 = {
    title: 'Young Mungo',
    pageCount: 238,
    genre: 'Fiction'
}
console.log(book2);

let book3 = {
    title: 'Sea of Tranquility',
    pageCount: 229,
    genre: 'Fiction'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Sea of Tranquility',
    pageCount: 229,
    genre: 'Fiction',
    authors: [
        {
            name: 'Emily St.John Mandel',
            age: 34
        }
    ]
}
console.log(book4);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let party = [
    {
        name: 'Vasya',
        username: 'vasya98',
        password: 'qwerty54321'
    },
    {
        name: 'Petya',
        username: 'petro',
        password: 'Qwer4321'
    },
    {
        name: 'Anna',
        username: 'anna98',
        password: 'dff342'
    },
    {
        name: 'Dima',
        username: 'Dima66',
        password: 'qWerdf21'
    },
    {
        name: 'Kolya',
        username: '8mykola',
        password: 'dfh5df3'
    },
    {
        name: 'Masha',
        username: '2masha2',
        password: '435rdfsd'
    },
    {
        name: 'Iryna',
        username: 'ira454',
        password: 'df43df'
    },
    {
        name: 'Sasha',
        username: 'alex544',
        password: '54dst3'
    },
    {
        name: 'Yulya',
        username: '4yulya',
        password: '4544fggh35'
    },
    {
        name: 'Katya',
        username: '4katya',
        password: '44ertf'
    }
]
console.log(party.length);
console.log(party[0].password);
console.log(party[1].password);
console.log(party[2].password);
console.log(party[3].password);
console.log(party[4].password);
console.log(party[5].password);
console.log(party[6].password);
console.log(party[7].password);
console.log(party[8].password);
console.log(party[9].password);

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 36;
if (time>=0 && time<=15) {
    console.log('First quarter');
} else if (time>=16 && time<=30) {
    console.log('Second quarter');
} else if (time>=31 && time<=45) {
    console.log('Third quarter');
} else if (time>=46 && time<=59) {
    console.log('Fourth quarter');
} else {
    console.log('Error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 3;
if (day>=1 && day<=10) {
    console.log('First decade');
} else if (day>=11 && day<=20) {
    console.log('Second decade');
} else if (time>=21 && time<=31) {
    console.log('Third decade');
} else {
    console.log('Error');
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let shed = +prompt('Enter the number of the day of the week');
// switch (shed) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('error');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 2;
let b = 7;
if (a === b) {
    console.log('equal numbers')
} else {
    console.log(Math.max(a, b));
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// Вариант 1: При этом варианте, когда передаю через promt значение 'string', оно почему-то принимает false:
let x1 = +prompt() || 'default';
console.log(x1);

// // Вариант 2: Если присваивать значение переменной сразу, без promt:
// let x2 = '';
// console.log(x2 || "default");

// Вариант 3:
// let x3 = +prompt();
// console.log(x3 !== 0 || "default");


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}


// или через цикл?

// for (const month of coursesAndDurationArray) {
//     if (month.monthDuration > 5) {
//         console.log("Супер");
//     }
// }