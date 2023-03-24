//SCOPE
// const pippo = 'ciao';

// if (true) {
//     console.log(pippo);
//     const pluto = 'javascript'
//     if (true) {
//         console.log(pluto);
//         const paperino = 'pizza';
//     }
//     //console.log(paperino); non è possibile leggere la variabile di uno scope interno
// }

//const pippo = pippo; non è possibile dichiarare due variabili con lo stesso nome nello stesso scope

// for (let i = 0; i < 3; i++) {
//     console.log('ciao');
// }

// for (let i = 0; i < 3; i++) {
//     console.log('mondo');
// }

// for (let i = 0; i < 10; i++) {
//     for (let i = 0; i < 10; i++) {
//         console.log(i); //SHADOWED VARIABLE
//     }
    
// }

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i); 
//         console.log(j); 
//     }
    
// }
//--------------------------------------------------------------------------------------------------------------
//FUNZIONI
// function elevaAlQuadrato(numero){ //VIVA LA NORMALITA
//     const risultato = numero * numero;
//     return risultato;
// }

// const dueAlQuadrato = elevaAlQuadrato(2);
// console.log(dueAlQuadrato);

// const cinqueAlQuadrato = elevaAlQuadrato(5);
// console.log(cinqueAlQuadrato);

// console.log(elevaAlQuadrato(50));

// const elevaAlQuadrato2 = function(numero){ //FUNZIONE ANONIMA
//     // const risultato = numero * numero;
//     // return risultato
//     return numero * numero;
// }

// console.log(elevaAlQuadrato2(3));

// const elevaAlQuadrato3 = (numero) => numero * numero; //FUNZIONE LAMBDA 

// // const elevaAlQuadrato4 = (numero) => {
// //     const risultato = numero * numero;
// //     return risultato;
// // }

// console.log(elevaAlQuadrato3(12));

// function elevazioneAPotenza(base, esponente){ //base e esponente sono "argomenti" o params in inglese
//     const risultato = base**esponente;
//     return risultato;
// }

// console.log(elevazioneAPotenza(3,4));
//---------------------------------------------------------------------------------------------------------
//FUNZIONI PURE E IMPURE
// function scriviNellaConsole(messaggio){ //FUNZIONE IMPURA
//     console.log(messaggio);
//     //return undefined;
// }
// const pippo = scriviNellaConsole('scemo chi legge');

// console.log(pippo);

// function sommaUno(numero){ //FUNZIONE PURA
//     return numero + 1;
// }

// // function sommaDueELogga(numero){ //FUNZIONE MISTA, NON USARLA MAI O EVITARE DI FARLO
// //     const risultato = numero + 2;
// //     console.log(risultato);
// //     return risultato;
// // }

// function log(messagio){
//     console.log(messagio);
// }

// function sommaDue(numero){
//     const risultato = numero + 2;
//     return risultato;
// }

// log(sommaDue(5));


// let pluto = 7;

// function duplicaPluto(){ // IMPURA
//     pluto = pluto * 2;
// }

// console.log(pluto);

// duplicaPluto();
// duplicaPluto();

// console.log(pluto);

// function duplica(numero){
//     return numero * 2;
// }

// pluto = duplica(pluto);

// console.log(pluto);
//------------------------------------------------------------------------------------------------------------
//ESERCIZI
//1) scrivere una funzione che dato un numero se è positivo lo moltiplichi per due
//2) scrivere una funzione che data una stringa restituisca la sua versione maiuscola
//3) scrivere una funzione che data una stringa mi restituisca vero se è più lunga di 10 caratteri, altrimenti
//restituisca falso
//4) scrivere una funzione pura che restituisca la scacchiera
//5) scrivere una funzione che dato un numero restituisca una stringa con la logica FizzBuzz
//6) scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari
//dell'originale

//1mo esercizio
// function moltiplicazionepositiva (i){
//     if (i > -1) {
//         i *= 2
//     }
//     return i
// }
// console.log(moltiplicazionepositiva(8));

//2do esercizio
// function maiuscola (m){
//     m = m.toUpperCase();
//     return m
// }
// console.log(maiuscola('ciao'));

//const convertTextToUpperCaseLamba = (text) => typeof text === 'string' ? text.toUpperCase () : ''; 

//3zo esercizio
// function chartrue (i){
//     let isMoreThan10 ;
//     if (i.length > 10){
//         isMoreThan10 += "vero";
//     } else{
//         isMoreThan10 += "falso";
//     }
//     return isMoreThan10
// }
// console.log(chartrue('ciaociaociao'));

//altra soluzione
// function isTextMoreThan10CharVersion2(text){
//     if (text.length > 10){
//         return true;
//     }
//     return false;
// }
// console.log(isTextMoreThan10CharVersion2('pippo'));

//altra soluzione 2
// function isTextMoreThan10CharVersion3(text){
//     return text.length > 10;
// }
// console.log(isTextMoreThan10CharVersion2('pippo'));

//funzione lambda
// const isTextMoreThan10CharLambda = (text) => text.length > 10;

// console.log(isTextMoreThan10CharLambda('pippo'));

//4to esercizio
// function scacco (i){
//     let rigaPari = '# # # # ', rigaDispari = ' # # # #';
//     for (let i = 0; i < 8; i++) {
//         if (i % 2 === 0) {
//             console.log(rigaPari);
//         } else {
//             console.log(rigaDispari);
//         };
//     }
//     return i
// }
// console.log(scacco(" "));

//5to esercizio
// function convertNumberToFizzBuzzLogic(selectedNumber){
//     if (selectedNumber % 3 === 0 && selectedNumber % 5 === 0) {
//         return 'FizzBuzz';
//     } else if (selectedNumber % 3 === 0) {
//         return 'Fizz';
//     } else if (selectedNumber % 5 ===0){
//         return 'Buzz';
//     }
//     return selectedNumber;
// }

// console.log(convertNumberToFizzBuzzLogic(3));
// console.log(convertNumberToFizzBuzzLogic(10));
// console.log(convertNumberToFizzBuzzLogic(15));
// console.log(convertNumberToFizzBuzzLogic(2));

//6to esercizio
function selectOddCharsFromText(text){
    let result = '';
    for (let i = 1; i < text.length; i+=2) {
        result += text.charAt(i);
    }
    return result;
}

console.log(selectOddCharsFromText('ciao'));
console.log(selectOddCharsFromText('andrea'));
console.log(selectOddCharsFromText('andrea il malvaggio'));
//altra soluzione
function selectOddCharsFromText(text){
    let result = '';
    for (let i = 1; i < text.length; i++) {
        if (i % 2 === 0) {
            
        }
        result += text[i];
    }
    return result;
}

console.log(selectOddCharsFromText('ciao'));
console.log(selectOddCharsFromText('andrea'));
console.log(selectOddCharsFromText('andrea il malvaggio'));

//7mo esercizio (esercizio libro)
// function findMyNumber(number1, number2) {
//     if(number1 > number2){
//         return number2;
//     } else{
//         return number1;
//     }
// }

// console.log(findMyNumber(10, 5));
// console.log(findMyNumber(-10, 0));

// const findMyNumberLambda = (number1,number2) => number1 > number2 ? number2 : number1;

//8vo esercizio// scrivere una funzione che sommi tutti i numeri in un range prestabilito

function sumRange(startNumber, endNumber){
    let sum = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumRange(0, 3))//6
console.log(sumRange(1, 3))//6
console.log(sumRange(1, 5))//15
console.log(sumRange(2, 6))//20
console.log(sumRange(6, 6))//6
console.log(sumRange(-2, 2))//0

//--------------------------------------------------------------------------------------------------
//LE FUNZIONI POSSONO USARE ALTRE FUNZIONI

function doubleAndPow3(selectedNumber){
    // const double = selectedNumber * 2;
    // const pow3 = double ** 3;
    // return pow3;
    // const double = makedouble(selectedNumber);
    // const pow3 = makepow3(double);

    return makepow3(makedouble(selectedNumber));
}

function makedouble(selectedNumber){
    return selectedNumber * 2;
} 

function makepow3(selectedNumber){
    return selectedNumber ** 3;
}

console.log(doubleAndPow3(2));//64
console.log(doubleAndPow3(3));//216

function ifMoreThan10CharUpperCase(text){

    function isMoreThan10CharInside(textToCheck){
        return textToCheck.length > 10;
    }

    if (isMoreThan10CharInside(text)) {
        return text.toUpperCase();
    } else {
        return text;
    }
}

console.log(ifMoreThan10CharUpperCase('il cane rosa non è in forma'));

//-------------------------------------------------------------------------------------------------------------
//RICORSIONE
function sumRangeRecursive(startNumber, endNumber, accumulator = 0){
    if (startNumber > endNumber) {
        return accumulator;
    }
    const newStart = startNumber + 1; 
    const newAccumulator = accumulator + startNumber;
    return sumRangeRecursive(newStart, endNumber, newAccumulator);
}
console.log('recursive', sumRangeRecursive(0, 3));//6
console.log('recursive', sumRangeRecursive(1, 3));//6
console.log('recursive', sumRangeRecursive(1, 5));//15
console.log('recursive', sumRangeRecursive(2, 6));//20
console.log('recursive', sumRangeRecursive(6, 6));//6
console.log('recursive', sumRangeRecursive(-2, 2));//0

//--------------------------------------------------------------------------------------------------------------
// function isEven(selectedNumber) {
//     if (selectedNumber === 0) {
//         return true;
//     }
//     if (selectedNumber === 1) {
//         return false;
//     }
//     const newNumber = selectedNumber - 2
//     return isEven(newNumber);
// }

// console.log(isEven(0));//true
// console.log(isEven(1));//false
// console.log(isEven(3));//false
// console.log(isEven(8));//true
//---------------------------------------------------------------------------------------------------------------
function isMyNumberEven(selectedNumber) {
    if (selectedNumber === 0) {
        return true;
    }
    if (selectedNumber === 1) {
        return false;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberOdd(newNumber);
}

function isMyNumberOdd(selectedNumber) {
    if (selectedNumber === 0) {
        return false;
    }
    if (selectedNumber === 1) {
        return true;
    }
    const newNumber = selectedNumber - 2
    return !isMyNumberEven(newNumber) ;
}

console.log(isMyNumberEven(3));//false
console.log(isMyNumberEven(3));//true