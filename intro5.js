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

// const arrayOfStrings = ['andrea', 'jing', 'valentina', 'vlad'];

// for (let i = 0; i < arrayOfStrings.length; i++) {
//     const element = arrayOfStrings[i];
//     console.log(element);
// }

//------------------------------------------------------------------------------------------------------------
//1)Scrivere una funzione che prende come parametro un array di numeri e fa console.log
//dei numeri con la logica fizzbuzz

//2)Scrivere una funzione che prende come parametro un array di stringhe e logga
//quelle più piccole di 5 caratteri

//3)Scrivere una funzione che prende como parametro una stringa e restituisce una stringa 
//composta dai primi 5 caratteri convertiti in maiuscolo

//4)Scrivere una funzione che prende come parametro una stringha e restituisce la lunghezza 
//di una stringa senza spazi

//4)Scrivere una funzione che prende come parametro una stringha e restituisce
//il numero degli spazi

//1mo esercizio
const pippo = [3, 15, 10, 8, 4];

function printArrayInFizzBuzzLogic(arrayOfNumber) {
    for (let i = 0; i < arrayOfNumber.length; i++) {
            const element = arrayOfNumber[i];
            console.log(element);
            if (arrayOfNumber % 3 === 0 && arrayOfNumber % 5 === 0) {
                        return 'FizzBuzz';
                    } else if (arrayOfNumber % 3 === 0) {
                        return 'Fizz';
                    } else if (arrayOfNumber % 5 ===0){
                        return 'Buzz';
                    }
                    return arrayOfNumber;
        }
}

console.log(printArrayInFizzBuzzLogic(pippo));