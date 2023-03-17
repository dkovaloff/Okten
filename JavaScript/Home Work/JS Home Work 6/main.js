// - Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(arrStr[0].length);
console.log(arrStr[1].length);
console.log(arrStr[2].length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let arrStr1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(arrStr1[0].toUpperCase());
console.log(arrStr1[1].toUpperCase());
console.log(arrStr1[2].toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arrStr2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
console.log(arrStr2[0].toLowerCase());
console.log(arrStr2[1].toLowerCase());
console.log(arrStr2[2].toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
let strings = str1.split(' ');
console.log(strings);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let newArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newString = newArr.map(value => value.toString());
console.log(newString);

// - створити функцію sortNums(direction), яка прймає масив чисел, 
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

// ==========================
// - є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
//  -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filt = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filt);


//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

console.log(coursesAndDurationArray.map((item, index) => ({ ...item, id: index + 1 })));


//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const suits = [
    { cardSuit: 'heart', color: 'red' },
    { cardSuit: 'diamond', color: 'red' },
    { cardSuit: 'spade', color: 'black' },
    { cardSuit: 'clubs', color: 'black' },
]

const cardNames = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card);
    }
}
console.log(deck);

//  - знайти піковий туз
console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

//  - всі шістки
console.log(deck.filter(value => value.value === 6));

//  - всі червоні карти
console.log(deck.filter(value => value.color === 'red'));

//  - всі буби
console.log(deck.filter(value => value.cardSuit === 'diamond'));

//  - всі трефи від 9 та більше
console.log(deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string')));

// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let sortDeck = deck.reduce((sort, value) => {
    if (value.cardSuit === 'spade') {
        sort.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        sort.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        sort.hearts.push(value);
    } else if (value.cardSuit === 'clubs') {
        sort.clubs.push(value);
    }

    return sort;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(sortDeck);

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass')));

// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));
