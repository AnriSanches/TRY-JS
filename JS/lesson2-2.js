'use strict';

// const cart = [4, 23, 65, 86, 12, 54];
// let total = 0;

// const calculateTotalPrice = function (items) {
//     console.log(items);
// };

// function calculateTotalPrice (items){
//     // console.log(items);
//     let total = 0;

//     for (const item of items) {
//         total += item
//     }

//     return total
// }
// const returnSumma = calculateTotalPrice([30, 39, 10, 54 ,23, 56 ,12 ,98, 1]);

// console.log(returnSumma);
// console.log(calculateTotalPrice([30, 39, 10]));
// console.log(calculateTotalPrice([30, 12, 12, 243, 39, 10]));

// Напиши ф-цию logItems(items) для перебора и логирования массива
// function logItems (items){
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems (['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems ([1, 2, 3, 4, 5]);
// logItems (['Клавиатура', 'наушники', 'часы']);

// const logins = ['Mama', 'papa', 'aurora2009', 'merlin2007'];
// const loginToFind = 'aurora2009';

// const message = logins.includes(loginToFind) ? 'yes' : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// function findLogin (allLogins, loginToFind){
//     let message = `Login ${loginToFind} is not find`;
//     for (const login of allLogins) {
//         if(login === loginToFind){
//             message = `Login ${loginToFind} is find`
//         }
//     }
//     return message;
// }

// function findLogin (allLogins, loginToFind){
//     for (const login of allLogins) {
//         if(login === loginToFind){
//             return `Login ${loginToFind} is find`
//         }
//     }
//     return `Login ${loginToFind} is not find`;
// }

// function findLogin (allLogins, loginToFind){
//     return allLogins.includes(loginToFind) ? `Login ${loginToFind} is find.` : `login ${loginToFind} is not fond`;
// }

// console.log(findLogin(logins, 'poly'));
// console.log(findLogin(logins, 'merlin2007'));
// console.log(findLogin(logins, 'ajax'));

// Ф-цию findSmallsNumber(numbers) для поиска самого маленького числа в массиве
// function findSmallsNumber(numbers){
//     let smallestNumber = numbers[0];
//     for (const number of numbers) {
//         if(number < smallestNumber){
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber
// }

// console.log(findSmallsNumber([1, -3, 43, 67, 23]));
// console.log(findSmallsNumber([4, 23, 83, 62, -13]));
// console.log(findSmallsNumber([12, 16, 76, 47, 13]));

// ф-цию changeCase(string) которая меняет регистр каждого символа на противоположный

// const string = 'LolA';
// const letters = string.slice('');
// let invertedString = '';
// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(invertedString);

// function changeCase (string){
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();
//         invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     }

//     return invertedString
// }

// console.log(changeCase('qwERty'));

// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//    for (let i = 0; i <= number; i += 1){

//     total += i;
//     // console.log(total);

//    }
//      // Change code above this line
//      return total;
//    }\

// const numbers = [222, 5, 8, 9, 54, 23, 65, 23, 86, 109, 12];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     // console.log(number);
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber: ', smallestNumber);

// function findLongestWord(string){
//     const array = string.split(' ');
//     // console.log(array);
//     let biggestWord = '';

//     for (const word of array) {
//         if(word.length > biggestWord.length){
//           biggestWord = word;
//           console.log(biggestWord);
//         }
//     }
//     return biggestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for( let i = min; i < max +1; i += 1){
//     numbers.push(i)
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newNumbers = [];

//   for (const number of numbers) {

//     if(number > value){
//       newNumbers.push(number);
//     }
//   }
//   return newNumbers
//  // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function getCommonElements(array1, array2) {
// Change code below this line
// let newArray = [];

// for (let item1 of array1) {
// console.log(item2);
// if(array2.includes(item1)){
// newArray.push(item1)
//     }
// }
// return newArray;

// Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// function getEvenNumbers(start, end) {
//   let evenNumber = [];

//   for(let i = start; i <= end; i += 1){
//     // console.log(i);
//     if(i % 2 === 0){
//       console.log(i);
//       evenNumber.push(i);
//     }
//   }
//   return evenNumber
// }
// console.log(getEvenNumbers(6, 12));

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

// const start = 6;
// const end = 27;
// let number = '';

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.log(`Результат выполнения функции ${result}`);

// function includes(array, value) {
//   // Change code below this line
// for (const element of array) {
//   if(element === value){
//     return true
//   }

// }
// return false
//   // Change code above this line
// }
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));

// ------------------NEW START-----------------------------------

/**
 * Напиши функцию calculateTotalPrice (items) которая принимает массив цен и возвращает их сумму
 */
// const cart = [4, 23, 65, 86, 12, 54];
// function calculateTotalPrice(value) {
//     let total = 0;
//     for (const item of value) {
//         total += item;
//     }
//     return total;
// }
// const result1 = calculateTotalPrice([1, 2, 3]);
// console.log(`Общая сумма покупок: -`, result1);
// console.log(calculateTotalPrice([10, 200, 300]));
// console.log(calculateTotalPrice([4, 23, 65, 86, 12, 54]));

/**
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

// function logItems(items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Mango', 'Kiwi', 'Poly']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

/**
 * Напиши функцию findLogins(allLogin, login) для поиска логина
 * Если логина нет, вывести в консоль сообщение "Пользователь [логина] не найден"
 * Если нашли логин, вывести сообщение "Пользователь [логина] найден"
 */

// const logins = ['Mama', 'papa', 'aurora2009', 'merlin2007'];
// const loginToFind = 'aurora2009';

// function findLogins(allLogins, loginToFind) {
//   for (const login of allLogins) {
//       if (login === loginToFind) {
//           return `Пользователь ${loginToFind} найден`;
//       }
//   }
// return `Пользователь ${loginToFind} не найден`;

//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
// }

// function findLogins(allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogins(logins, 'aurora2009'));
// console.log(findLogins(logins, 'aurora2008'));
// console.log(findLogins(logins, 'merlin2007'));

/**
 * Напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа в массиве
 * при условии что числа уникальные (не повторяются)
 */

// const numbers = [1, 4, 6, 91, -5];
// function findSmallestNumbers(arr) {
//     let smallestNumber = arr[0];
//     for (const item of arr) {
//         if (smallestNumber > item) {
//             smallestNumber = item;
//         }
//     }
//     return smallestNumber;
// }

// console.log(findSmallestNumbers([3, 6, 8, 2, -1]));
// console.log(findSmallestNumbers([93, 86, 54, 23, 34]));

/**
 * Напиши функцию changeCase(string) которая заменяет регистр
 * Каждый символ в строке на противоположный
 */

// function changeCase(string) {
//     let invertedString = '';
//     const letters = string.split('');

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return invertedString;
// }

// console.log(changeCase('qweSDFa'));
// console.log(changeCase('ASDa'));

/**
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв
 */

// const title = 'Top 10 benefits of React framework'

// function slugify(string) {
//     const slugify = string.toLowerCase().split(' ').join('-');
//     return slugify;
// }

// console.log(slugify('Top 10 benefits of React framework'));

/**
 *-------------- Псевдо массив arguments and Array.from и ...
 */

// function fn() {
//     console.log(arguments);

//     const args = Array.from(arguments);
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// function fn(...args) {
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * Array.from()
 * Операция ...(rest)
 */

// function add(...numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }

// console.log(add(1, 2, 3, 4, 5));

/**
 * Напиши функцию filterNumbers(array[, number1, ...]) которая:
 * -1 аргументом принимает массив чисел
 * -после 1 аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть массив, в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном массиве.
 */

// function filterNumbers(numbers, ...args) {
//     const repeatNumber = [];

//     for (const number of numbers) {
//         if (args.includes(number)) {
//             repeatNumber.push(number);
//         }
//     }
//     return repeatNumber;
// }

// console.log(filterNumbers([10, 15, 25, 30, 18, 19], 15, 18, 11, 99, 33));

//Practice-----------------------------------------------------
