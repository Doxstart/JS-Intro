// let a = 5;
// let b = 'ciao';

// function square(num){
//     return num*num
// }

// console.log(square(a));

// let f = function(n){
//     return n*n
// }

// let f2 = (n) => n*n //Funzione Lambda

// console.log("F: " + f(5));

// //Ripetere un'operazione un certo numero di volte

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }

// function logNumbersFrom0to9(){
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//       }
// }

// //Astrago i dettagli dell'algoritmo all'interno di una funzione
// logNumbersFrom0to9();


// function logNumbersFrom0to9(maxNum){
//     for (let i = 0; i < maxNum; i++) {
//         console.log(i);
//       }
// }

// console.log('\n');
// logNumbersFrom0to9(10);

// console.log('\n');
// logNumbersFrom0to9(20);


// function doubleNumbersFrom0to(maxNum){
//     for (let i = 0; i < maxNum; i++) {
//         console.log(i * 2);
//       }
// }


// //FUNZIONE DI ORDINE SUPERIORE: Ripetere una certa operazione a nostra scelta.
// function logNumber(n){
//     console.log(n);
// }

// function logDouble(n){
//     console.log(n*2);
// }

// function logHello(){
//     console.log('Hello');
// }



// function repeatFrom0To(maxNum, func){ // maxNum=15, func=isDivisibleBy3
//     for (let i = 0; i < maxNum; i++) {
//         func(i); //Che operazione è func? Dipende...
//         //func <- logNumber
//         //func <- logDouble
//         //...
//       }
// }

// function isDivisibleBy3(n) {
//     if (n % 3 === 0) {
//         console.log(n + ": " + true);
//     }
//     else if (n % 3 !== 0) {
//         console.log(n + ": " + false);
//     }
// }


// console.log('\n');
// repeatFrom0To(10, logNumber);

// console.log('\n');
// repeatFrom0To(10, logDouble);

// console.log('\n');
// repeatFrom0To(10, logHello);

// //Chiamare la funzione repeatFrom0To in modo che stampi per ogni numero (i)
// //se i è divisibile per 3

// repeatFrom0To(15, isDivisibleBy3);

// repeatFrom0To(15, function(n){ //Funzione Anonima
//     console.log('Divisible by 3: ', n, n % 3 === 0);
// })

// //LAMBDA / ARROW FUNCTIONS 
// //setInterval(function() {console.log('Test')}, 1000) 

// //setInterval(() => console.log('Test'), 1000); //one-liner

// //CLOSURE
// console.log('CLOSURE E FUNZIONI CHE RESTITUISCONO ALTRE FUNZIONI')

// let counter = 10

// function printAndIncrementCounter(){
//     console.log(counter);
//     counter++
// }

// printAndIncrementCounter()
// printAndIncrementCounter()
// printAndIncrementCounter()

// console.log('Normal console.log: ' + counter)

// //FUNZIONI CHE RITORNANO ALTRE FUNZIONI

// function getRangeCheckFunction(min, max) {
//     return function(n){
//         return n >= min && n <= max
//     }
// }

// let isBetween0and5 = getRangeCheckFunction(0, 5)
// console.log(isBetween0and5(7))//false
// console.log(isBetween0and5(1))//true
// console.log(isBetween0and5(-8))//false

// let isBetween10and20 = getRangeCheckFunction(10, 20)
// console.log(isBetween0and5(7))//false
// console.log(isBetween0and5(1))//false
// console.log(isBetween0and5(-8))//false


// function isInRange(n, min, max) {
//     return n >= min && n <= max
// }

// console.log(isInRange(7))//false
// console.log(isInRange(1))//true
// console.log(isInRange(-8))//false

// //ARRAY E FUNZIONI DI ORDINE SUPERIORE
// console.log('ARRAY E FUNZIONI DI ORDINE SUPERIORE')

// let numbers = [1, 2, 3, 4, 5] // [1, 4, 9, 16, 25]

// //map

// let squaredNumbers = []

// for (let n of numbers){
//     squaredNumbers.push(n*n)
// }

// for(let sn of squaredNumbers){
//     console.log(sn)
// }

// let doubleNumbers = []

// for(let n of numbers){
//     doubleNumbers.push(n*2)
// }
// //---------------------------------------------------------------------------------------------------------

// //SCRIVE UNA FUNZIONE map() CHE DATO IN INGRESSO UN ARRAY, RESTITUISCE UN NUOVO ARRAY CON GLI STESSI
// //ELEMENTI DEL PRIMO TRASFORMATI USANDO UNA FUNZIONE RICEVUTA IN INGRESSO

// //squaredNumbers = map(numbers, n => n*n)

// //squaredNumbers -> [1, 4, 9, 16, 25]


// // function map(array, func){
// //     let randomNumbers = []
// //     for (let i = 0; i < array.length; i++) {
// //         const element = array[i];
// //         randomNumbers.push (func(element))
// //     }
// //     return randomNumbers;
// // }

// // function multiplyBy3(n){
// //     return n*3   
// // }

// // console.log(map([8, 5, 9, 120], multiplyBy3))
// // console.log(map([5, 18, 90, 157], multiplyBy3))
// //-----------------------------------------------------------------------------------------------------------
// console.log('MAP, FILTER, ecc.')

// let testArray = [9, 9, 3]

// console.log(testArray.map(n => n * n)) //Modificare un array

// console.log(testArray.filter(n => n <= 5)) //Filtrare un elemento minore o uguale a 5 dentro un array

// let sum = 0;

// testArray.forEach(n => sum += n) //Sommare tutti gli elementi del array
// console.log(sum)

// let words = ['ciao', 'pippo', 'topolino', 'ciao mondo']
// let res = words
//             .filter(w => w.length > 5)
//             .map(w => w.length)
//             .forEach(numberOfChars => console.log(numberOfChars))

// console.log([1,2,3,4,5].reduce((accumulator, num) => accumulator + num, 0))     

//------------------------------------------------------------------------------------------------------

//1)Le higher order functions sono abbastanza strane.
//2)La reduce è la più strana in assoluto.
//3)Esistono molti linguaggi di programmazione che ne fanno tranquillamente a meno.
//4)Esistono molti programmatori che ne fanno tranquillamente a meno (anche programmatori molto bravi).
//5)Ogni volta che qualcuno dei ragazzi che lavora con me deve scrivere una reduce non banale
//mi chiama per conforto.
//6)Purtroppo dovete imparare almeno a leggerle!!!

//-------------------------------------------------------------------------------------------------------

