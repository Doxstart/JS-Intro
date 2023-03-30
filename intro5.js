//ARRAY
//let pippo = [15, 3, 23, 34, 21]; 
//let pluto = [1, 'ciao', false];//MALISSIMO, non usare diversi tipi di dati in un array

// pippo.push(100); //con push aggiungo un elemento in fondo al'array
// const pluto = pippo.pop() //con pop rimuovo l'ultimo elemento dell'array
// const paperino = pippo.pop()

// console.log(pippo);
// console.log(pluto);
// console.log(paperino);

// pippo.unshift(200); // [200, 15, 3, 23, 34, 21] //unshift aggiunge un elemento all'inizio dell'array

// const paperone = pippo.shift(); //shift rimuove l'elemento all'inizio dell'array
// const paperina = pippo.shift();

// console.log(pippo);//[3, 23, 34, 21]
// console.log(paperone);//200
// console.log(paperina);//15

// console.log(pippo);
// pippo.pop()
// console.log(pippo); a volte il log non è affidabile.

// const arrayOfStrings = ['andrea', 'davide', 'jing', 'valentina', 'vlad'];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }

// const indexOfJing = arrayOfStrings.indexOf('jing');
// console.log(indexOfJing);
// const indexOfSimone = arrayOfStrings.indexOf('simone');
// console.log(indexOfSimone);
// arrayOfStrings[0] = 'pietro'; //sostituisce un elemento del mio array
// console.log(arrayOfStrings);

//------------------------------------------------------------------------------------------------------------
//OGGETTI

// const andrea = {
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978, //yob è year of birth
//     isMarried: false,
//     pupils: ['davide', 'jing', 'valentina', 'vlad'],
//     dog: {
//         name: 'Ariel',
//         breed: 'border-collie'
//     },
//     "cool car": "bmw"
// }

// console.log(andrea);
// console.log(andrea.surname); //serve per chieder un tipo di dato che ho bisogno
// console.log(andrea['yob']); //altra maniera di chiedere un dato che mi serve
// console.log(andrea['cool car']);

//ESERCIZIO
// const luis ={
//     name: 'Luis',
//     surname: 'Castro',
//     yob: 1993,
//     nickname: 'Lucho',
//     email: 'lucho93lol@hotmail.com'
// }
// const andrea ={
//     name: 'Andrea',
//     surname: 'Asioli',
//     yob: 1978,
//     nickname: 'Labstraction',
//     email: 'ilmionuovoaccount@gmail.com'
// }
// const jing ={
//     name: 'Jing',
//     surname: 'Wang',
//     yob: 1993,
//     nickname: 'jing',
//     email: 'jingmail@hotmail.com'
// }
// const valentina ={
//     name: 'Valentina',
//     surname: 'Cherubini',
//     yob: 2001,
//     nickname: 'Vale',
//     email: 'maildivale@hotmail.it'
// }
// const vlad ={
//     name: 'Vlad',
//     surname: 'qualcosa lunga',
//     yob: 1997,
//     nickname: 'vlady',
//     email: 'vladymailtome@yahoo.it'
// }
// const davide ={
//     name: 'Davide',
//     surname: 'Consigliere',
//     yob: 1989,
//     nickname: 'Dave',
//     email: 'davemailxx89@yahoo.it'
// }
// const francesco ={
//     name: 'Francesco',
//     surname: 'Badile',
//     yob: 1993,
//     nickname: 'sunshinemocha',
//     email: 'sunshinemocha93@gmail.it'
// }
// const daniele ={
//     name: 'Daniele',
//     surname: 'Puggioni',
//     yob: 1999,
//     nickname: 'Pooh',
//     email: 'poohmailxx99@hotmail.it'
// }
// const pietro ={
//     name: 'Pietro',
//     surname: 'Viglino',
//     yob: 1988,
//     nickname: 'pepo',
//     email: 'pepomail@gmail.it'
// }
// const simone ={
//     name: 'Simone',
//     surname: 'Maccarone',
//     yob: 2003,
//     nickname: 'simo',
//     email: 'simomailxx03@yahoo.it'
// }

// const myClass = [luis, andrea, jing, valentina, vlad, davide, francesco, daniele, pietro, simone];

// for (let i = 0; i < myClass.length; i++){ //prima soluzione
//     const element = myClass[i];
//     console.log('NOME: ' + myClass[i].name + ' ' + myClass[i].surname + ' (' + myClass[i].nickname+ "),\nETA: "
//     + myClass[i].yob + ",\nEMAIL: " + myClass[i].email);
// }

// for (let i = 0; i < myClass.length; i++) { //seconda soluzione
//     const person = myClass[i];
//     const description = `
// NOME: ${person.name} ${person.surname} (${person.nickname})
// ETA': ${2023 - person.yob}
// Email: ${person.email}`
//     console.log(description);
// }

// for (let i = 0; i < myClass.length; i++) { //terza soluzione
//     const person = myClass[i];
//     console.log('NOME: ' + person.name + ' ' + person.surname + ' (' + person.nickname + ')\n'
//                +'ETA\': ' + (2023 - person.yob) + '\n'
//                +'EMAIL: ' + person.email)
// }

// NOME: Luis Castro (Lucho)
// ETA: 29 anni
// EMAIL: lacj2003@hotmail.com

//------------------------------------------------------------------------------------------------------------
//DA ARRAY A OGGETTI E VICEVERSA
// const arielloArray = ['ariel', 'border-collie', 'maschio', 'bianco e nero']

// console.log(arielloArray);

// const arielloObj = {
//     name: arielloArray[0],
//     breed: arielloArray[1],
//     gender: arielloArray[2],
//     color: arielloArray[3],
// }

// console.log(arielloObj);

// const newArielloArray = Object.values(arielloObj); //mi da i valori di un oggetto dentro un array  

// console.log(newArielloArray);

// const newKeysArray = Object.keys(arielloObj); //mi da le chiavi di un oggetto dentro un array 

// console.log(newKeysArray);

//-------------------------------------------------------------------------------------------------------------
//VALUE TYPES AND REFERENCE TYPES
// let pippo = 5;
// let pluto = pippo;
// pippo = 7;

// console.log(pippo);//7
// console.log(pluto);//5

// let topolino = {yob: 1930, name: 'micky mouse'};
// let newTopolino = topolino;
// topolino.yob = 1950;

// console.log(topolino.yob);//1950
// console.log(newTopolino.yob);//1950

// function sum2(selectedNumber){
//     selectedNumber = selectedNumber + 2
//     return selectedNumber;
// }

// let paperino = 5;

// let basettoni = sum2(paperino);

// console.log(paperino);
// console.log(basettoni);

// function make2YearsOlder(person) {
//     person.yob = person.yob + 2;
//     return person;
// }

// let andrea = {name: 'Andrea', yob: 1978}

// let olderAndrea = make2YearsOlder(andrea);

// console.log(andrea);//1980
// console.log(olderAndrea);//1980

// function make2YearsOlderWithClone(person){
//     //let clone = {name: person.name, yob: person.yob};
//     let clone = {...person};// {...} modo più veloce di copiare un oggetto (shallow copy)
//     clone.yob = clone.yob + 2;
//     return clone;
// }

// let simone = {name: 'Simone', yob: 2003}

// let olderSimone = make2YearsOlderWithClone(simone);

// console.log(simone);//2003
// console.log(olderSimone);//2005

//------------------------------------------------------------------------------------------------------------
//DESTRUCTURING / DESTRUTTURARE

// const libro = {
//     titolo: 'la divina comedia',
//     autore: 'Dante Alighieri',
//     anno: 2019,
//     paese: 'Italia',
//     casaEditrice: 'einaudi'
// }

// // const titolo = libro.titolo;
// // const autore = libro.autore;

// const {titolo, autore} = libro;

// console.log(titolo, autore);

//------------------------------------------------------------------------------------------------------------
//JSON o Javascript Object Notation

// const libro = {
//     titolo: 'la divina comedia',
//     autore: 'Dante Alighieri',
//     anno: 2019,
//     paese: 'Italia',
//     casaEditrice: 'einaudi'
// }

// const libroInStringa = JSON.stringify(libro); //serve per convertire un oggetto in una stringa

// console.log(libro);
// console.log(libroInStringa);

// const libroInStringa2 = '{"titolo":"iliade","autore":"omero","anno":2010,"paese":"Italia","casaEditrice":"giunti"}';
// const libro2 = JSON.parse(libroInStringa2);

// console.log(libroInStringa2);
// console.log(libro2);

//------------------------------------------------------------------------------------------------------------
//FILTER
//1)Scrivere una funzione che dato un array di numeri restituisce un array con i numeri maggiori o
//uguali a 0

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function filterNegative(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log(filterNegative(numbers)); // [100, 0, 1001, 1, 34]

//MAP
//2)Scrivere una funzione che dato un array di numeri li moltipica tutti per due

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function multiplyByAllElementsby2(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         const result = element * 2;
//         tempArray.push(result);
//     }
//     return tempArray;
// }

// console.log(multiplyByAllElementsby2(numbers)); //[200, -46, 0, -468, 2002, 2, 68, -24]

//REDUCE
//3)Creare una funzione che somma tutti gli elementi di un array di numeri

// const numbers = [100, -23, 0, -234, 1001, 1, 34, -12];

// function sumAllElements(array){
//     let tempNumber = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempNumber = tempNumber + element;
//     }
//     return tempNumber;
// }

// console.log(sumAllElements(numbers)); //867
//------------------------------------------------------------------------------------------------------------
//TUTTI I CICLI IN JAVASCRIPT

// const numbers = [9, 8, 7, 1, 2, 3];

// let i = 0
// //WHILE
// while (i < numbers.length){
//     const element = numbers[i];
//     console.log(element);
//     i++;
// }

// //FOR
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }

// //DO WHILE
// let j = 0
// do{
//     const element = numbers[j];
//     console.log(element);
//     j++
// } while (j < numbers.length);

// //FOR OF
// for (const element of numbers) {
//     console.log(element);
// }

// //FOR EACH
// numbers.forEach((element) => console.log(element));

// //MAP
// numbers.map((element) => element * 2);

// //FILTER
// numbers.filter((element) => element % 2 === 0);

// //REDUCE
// numbers.reduce((previousElement, currentElement) => previousElement + currentElement, 0);

// const strings = ['qui', 'quo', 'qua'];

// strings.reduce((previousElement, currentElement) => previousElement + currentElement, '');

// //FOR IN - per ciclare gli oggetti

// const andrea = {
//     name: 'Andrea',
//     surname: 'Aisoli',
//     hasADog: true,
//     yob: 1978
// }

// for (const key in andrea) {
//     if (Object.hasOwnProperty.call(andrea, key)) {
//         const value = andrea[key];
//         console.log(`andrea ha la propieta ${key} associata al valore ${value}`);
//     }
// }


//------------------------------------------------------------------------------------------------------------
//ESERCIZI
//1)Scrivere una funzione che prende come parametro un array di numeri e fa console.log
//dei numeri con la logica fizzbuzz

//2)Scrivere una funzione che prende come parametro un array di stringhe e logga
//quelle più piccole di 5 caratteri

//3)Scrivere una funzione che prende como parametro una stringa e restituisce una stringa 
//composta dai primi 5 caratteri convertiti in maiuscolo

//4)Scrivere una funzione che prende come parametro una stringha e restituisce la lunghezza 
//di una stringa senza spazi

//5)Scrivere una funzione che prende come parametro una stringha e restituisce
//il numero degli spazi

//1mo esercizio
// const pippo = [3, 15, 10, 8, 4];

// function printArrayInFizzBuzzLogic(arrayOfNumber) {
//     for (let i = 0; i < arrayOfNumber.length; i++) {
//             const element = arrayOfNumber[i];
//             if (element % 3 === 0 && element % 5 === 0) {
//                         console.log('FizzBuzz');
//                     } else if (element % 3 === 0) {
//                         console.log('Fizz');
//                     } else if (element % 5 ===0){
//                         console.log('Buzz');
//                     } else{
//                         console.log(element);
//                     }
//         }
// }

// printArrayInFizzBuzzLogic(pippo);

//2do esercizio

// const pluto = ['casa', 'armadio', 'gatto', 'perfetto', 'mano']

// const paperino = ['qui', 'quo', 'qua', 'paperina'];

// function printShorterThan5Chars(arrayOfStrings){
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         const element = arrayOfStrings[i];
//         if (element.length < 5) {
//             console.log(`la stringa è `+ element);
//         }
//     }
// }

// printShorterThan5Chars(pluto);
// printShorterThan5Chars(paperino);

//3zo esercizio
// function pickFirst5CharsAndMakeUpperCase(text){
//     let resultText = '';
//     for (let i = 0; i < text.length; i++) {
//         if (i < 5) {
//             const char = text[i];
//             resultText += char;
//         }
        
//     }
//     return resultText.toUpperCase();
// }

// console.log(pickFirst5CharsAndMakeUpperCase('deltaplano')) //DELTA

//4to esercizio
// function lengthOfTextWithoutSpaces(text) {
//     const textWithoutSpaces = text.replaceAll(' ','');
//     console.log(textWithoutSpaces);
//     return textWithoutSpaces.length;
// }

// console.log(lengthOfTextWithoutSpaces('il nano enorme')) //12

//5to esercizio
// function countSpaces(text) {
//     let numberOfSpaces = 0;
//     for (let i = 0; i < text.length; i++) {
//         const char = text[i];
//         if (char === ' ') {
//             numberOfSpaces++;
//         }
//     }
//     return numberOfSpaces;
// }

// console.log(countSpaces('il nano enorme')); //2

//-----------------------------------------------------------------------------------------------------------
//ESERCIZI 27/03

//1)Scrivere una funzione che prende in input un array di numeri e restituisce un array di stringhe in logica
//FizzBuzz (map)

// const numbers = [3, 5, 15, 8, 12, 2];

// function convertArrayInFizzBuzz(array){
//     const tempArray = [];
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             let result = '';
//             if (element % 3 === 0 && element % 5 === 0) {
//                result = 'FizzBuzz'; 
//             }else if (element % 3 === 0) {
//                 result = 'Fizz';
//             }else if (element % 5 === 0) {
//                 result = 'Buzz';
//             }else{
//                 result += element;
//             }
//             tempArray.push(result);
//         }
//         return tempArray;
// }

// function convertArrayInFizzBuzz2(array){
//     const newArray = array.map((numb) =>{
//         let result = '';
//             if (element % 3 === 0 && element % 5 === 0) {
//                result = 'FizzBuzz'; 
//             }else if (element % 3 === 0) {
//                 result = 'Fizz';
//             }else if (element % 5 === 0) {
//                 result = 'Buzz';
//             }else{
//                 result += element;
//             }
//             return result; 
//     });
//     return newArray;
// }   

// console.log('Esercizio 1: ', convertArrayInFizzBuzz(numbers)); //['Fizz', 'Buzz', 'FizzBuzz', '8', 'Fizz', '2']

// //2)Scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui 
// //i positivi sono trasformati in negativi e viceversa (map)

 const numbers1 = [-3, 5, 15, -8, 12, 2, 0];

// function invertElements(array){
//     const tempArray = [];
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             let result = 0;
//             if (element !== 0) {
//                 result = element * -1
//             }
//             tempArray.push(result);
//         }
//         return tempArray;
// }

function invertElements2(array){
    const tempArray2 = array.map((array) => {
        for (let i = 0; i < array.length; i++) {
                        const element = array[i];
                        let result = 0;
                        if (element !== 0) {
                            result = element * -1
                        }
                        tempArray2.push(result);
                    }
    });
    return tempArray2;
}

 console.log('Esercizio 2: ', invertElements2(numbers1)); //[3, -5, -15, 8, -12, -2, 0]

// //3)Scrivere una funzione che prende in input un array di stringhe e restituisce un array di numeri con la
// //lunghezza delle stringhe (map)

// const strings = ['pippo', 'pluto', 'qui'];

// function lengthOfELements(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         tempArray.push(element.length);
//     }
//     return tempArray;
// }

//function lengthOfELements2(array){
    //const tempArray2 = 
//}

// console.log('Esercizio 3: ', lengthOfELements(strings)); //[5, 5, 3]


// //4)Scrivere una funzione che prende in input un array di stringhe e restituisce solo quelle che contengono 
// //la lettera z (filter)

// const strings2 = ['pippo', 'pluto', 'qui', 'zapotec'];

// function onlyELementswithZ(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         // if (element.includes('z')) { //primo metodo con .includes
//         //     tempArray.push(element);
//         // }
//         if (element.indexOf('z') !== -1) { //secondo modo di risolvere con .indexOf
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log('Esercizio 4: ', onlyELementswithZ(strings2)); //['zapotec']

// //5)Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari (filter)

// const numbers2 = [-3, 5, 15, -8, 12, 2, 0];

// function onlyEven(array){
//     const tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0) { 
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log('Esercizio 5: ', onlyEven(numbers2)); //[-8, 12, 2, 0]

// //6)Scrivere una funzione che prende in input un array di sringhe restituisce una stringa composta dalle iniziali (reduce)

 const strings3 = ['pippo', 'osvaldo', 'paperino'];

// function sumFirstChar(array){
//     let tempString = '';
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             const firstChar = element[0];
//             tempString += firstChar;
//         }
//         return tempString;
// }

// function sumFirstChar1(array){
//     const newArray = array.reduce((previous, current) => {
//         const firstChar = current[0];
//         previous += firstChar;
//         return previous;
//     }, ''); 
//     return newArray
// }

function sumFirstChar2(array){
    return array.reduce((previous, current) => previous += current[0], '');
}

console.log('Esercizio 6: ', sumFirstChar2(strings3));
//console.log('Esercizio 6: ', sumFirstChar1(strings3));

// console.log('Esercizio 6: ', sumFirstChar(strings3)); //'pop'

// //7)Scrivere una funzione che prende in input un array di numeri e restituisce il maggiore (reduce)

//const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

// const numbers4 = [-1, -4, -3]

// function maxElement(array){
//     let tempNumber = array[0];
//         for (let i = 1; i < array.length; i++) {
//             const element = array[i];
//             if (tempNumber < element) {
//                 tempNumber = element;
//             } 
//         }
//         return tempNumber;
// }

const numbers3 = [-3, 5, 15, -8, 12, 2, 0];

function maxElement4(array){
    return array.reduce((previous, current) => {
        if (previous < current){
            return current;
        }else {
            return previous;
        }
    }, -Infinity);
}

console.log('Esercizio 7: ', maxElement4(numbers3))

// console.log('Esercizio 7: ', maxElement(numbers3)) //15
// console.log('Esercizio 7: ', maxElement(numbers4)) //-1


//-----------------------------------------------------------------------------------------------------------
//INTERROGAZIONE

// console.log([3, 5, 12, 1].map((numero) => numero * 2));

// function loopNumbersFrom1To15AndApplyAFunction(myStrangeFunction, mySecondStrangeFunction){
//     for (let i = 1; i < 16; i++) {
//         const resultOfTheStrangeFunction = myStrangeFunction(i);
//         mySecondStrangeFunction(resultOfTheStrangeFunction);
//     }
// }

// function divideBy2IfEven(myNumber){
//     if (myNumber % 2 === 0) {
//         return myNumber / 2;
//     }
//     return myNumber;
// }

// function logIfGreaterThan4(myNumber){
//     if (myNumber > 4) {
//         console.log(myNumber);
//     }
// }

// loopNumbersFrom1To15AndApplyAFunction(divideBy2IfEven, logIfGreaterThan4);

// loopNumbersFrom1To15AndApplyAFunction(logIfGreaterThan4, divideBy2IfEven);

// function createMultiplicator(myNumber){
//     function multiply(selectedNumber){
//         return selectedNumber * myNumber;
//     }
//     return multiply
// FUNZIONE LAMBDA -----> return(selectedNumber) => selectedNumber * myNumber;
// }

//const createMultiplicator = (myNumber) => (selectedNumber) => selectedNumber * myNumber;

// const multiplicatorBy2 = createMultiplicator(2); 
// const multiplicatorBy3 = createMultiplicator(3);

// console.log(multiplicatorBy2(5))//10
// console.log(multiplicatorBy3(4))//12

// console.log(createMultiplicator(5)(4))//20

// function applyTwice(myFunction){
//     return (input) => myFunction(myFunction(input));
// }

// function add1(selectedNumber){
//     return selectedNumber + 1;
// }

// const add2 = applyTwice(add1);
// const add4 = applyTwice(add2);

// console.log(add2(5)) //7
// console.log(add4(10)) //14

// console.log(applyTwice(applyTwice(add1))(10)) //14