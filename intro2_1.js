// Incrementi
// let index = 5;

// index = index + 1;
// index+=5;

// let counter = 0;

// counter = counter + 1;  //fanno la stessa cosa (sommare + 1)

// counter+= 1  //fanno la stessa cosa (sommare + 1)

// counter++;  //fanno la stessa cosa (sommare + 1)
//---------------------------------------------------------------------
// IF ELSE ELSEIF

// let pippo = true;

// if(pippo){
//     console.log('var merda!');
// } else{
//     console.log('viva var!');
// }

// let pluto = 1;

// if(pluto!==3){
//     console.log('viva javascript!!');
// }

// let paperino = 5;

// if(paperino === 3){
//     console.log('qui');
// }else if(paperino === 5){
//     console.log('quo');
// }else if(paperino === 1){
//     console.log('qua');
// }else{
//     console.log('sticazzi');
// }

// let paperone = 5;

// if(paperone < 10){
//     console.log('dollari'); //esegue solo la prima stampa che è venuta vera, si dimentica le altre perchè ha già sodisfatto la sua richiesta 
// }else if(paperone < 6){
//     console.log('euro');
// }else{
//     console.log('bitcoin');
// }
//--------------------------------------------------------------------------------------------------
//CICLO WHILE   
// while (true) {
//     console.log('ciao'); //si esegue al infinito
// } 
// let index = 0;
// while (index < 10) { 
//     index++;
//     console.log(index);
// } //prima esegue l'operazione poi mi stampa il risultato (1,2,3,4,5,6,7,8,9,10)
// while (index > -1) {
//     index--;
//     console.log(index);
// } //parte dal ultimo risultato del primo ciclo quindi parte da 10 (9,8,7,6,5,4,3,2,1,0,-1)
//--------------------------------------------------------------------------------------------------------
//CICLO FOR
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// } //prima stampa index, poi essegue l'operazione, quindi parte da 0 (0,1,2,3,4,5,6,7,8,9)
// for (let index = 0; index < 100; index += 5) {
//     console.log(index); 
// }
//--------------------------------------------------------------------------------------------
//ESERCIZO 1
//numeri dispari minori di 300
// let index = 1;
// while(index < 300){
//     console.log(index);
//     index+=2;
// }
//ESERCIZIO 2
// da 10 a 0 e viceversa
//1ma soluzione
// for (let index = 10; index >= 0; index--) {
//     console.log(index);   
// }
// for (let index = 1; index <=10 ; index++) {
//     console.log(index);
// }
//2da soluzione
// let index = 10
// let step = -1
// while (index <=10) {
//     console.log(index)
//     if (index === 0){
//         step = 1
//     } 
//     index += step;
// }
//3za soluzione
// let index = 0;
// let counter = 11;
// while (index <=20) {
//     if (index <=10){
//         counter--;
//     }
//     else{
//         counter++;
//     }
//     index++;
//     console.log(counter);
// }
//ESERCIZIO 3   
//triangolo di cancelletti
// #
// ##
// ###
// ####
// #####
// ######
// #######
//soluzione 1
// let string = '';
// let index = 0;

// while (index <= 7){
//     string+='#'
//     index++;
//     console.log(string);
// }
//soluzione 2
// let string = '';

// while (string.length<7) {
//     string += '#'
//     console.log(string);
// }

// ESERCIZIO 4
//Fizzbuzz
//soluzione prof.
// let number = 1;

// for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     }else if (i % 3 === 0) {
//         console.log('Fizz');
//     }else if (i % 5 === 0) {
//         console.log('Buzz');
//     }else{
//         console.log(i)
//     }
    
// }
//soluzione prof. 2

// for (let i = 1; i < 101; i++) {
//     let result = '';
//     if (i % 3 === 0){
//         result += 'Fizz';
//     }
//     if (i % 5 === 0){
//         result += 'Buzz';
//     }
//     if (result) {
//         console.log(result);
//         continue;
//     }
//     console.log(i);
// }
//-------------------------------------------------------------------------------------------------
//CICLI ANNIDATI

// for (let x = 1; x < 11; x++) {
//     for (let y = 1; y < 11; y++) {
//         console.log('X: ', x, 'Y: ', y);
//     }
// }

//altra soluzione
// let scacchiera = '';
// let size = 18;

// for (let riga = 0; riga < size; riga++) {
//     if (riga % 2 !== 0) {
//         scacchiera += ' #'.repeat(size/2);
//     }else if (riga % 2 === 0) {
//         scacchiera += '# '.repeat(size/2);
//     };
//     scacchiera += '\n';
// };

// console.log(scacchiera);
//-----------------------------------------------------------------------------------------------
// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i/2);
//     } else if (i % 3 === 0) {
//         console.log(i**3);
//     } else{
//         console.log(i);
//     }
// }

// let misteryNumber = 1, notFound = true;
// while (notFound){
//     const multipleOf2 = misteryNumber % 2 === 0;
//     const multipleOf3 = misteryNumber % 3 === 0;
//     const multipleOf5 = misteryNumber % 5 === 0;
//     if (multipleOf2 && multipleOf3 && multipleOf5){ //&& (AND) tutte le condizioni devono essere vere per eseguire if, se falso salta a else ed esegue...
//         console.log(misteryNumber);
//         notFound = false;
//     } else {
//         misteryNumber++;
//     }
// }
//----------------------------------------------------------------------------------------------------
//PIRAMIDE
// let riga = '#';
// for (let i = 0; i < 7; i++) {
//     console.log(riga);
//     riga = riga + '#';
// }
//------------------------------------------------------------------------------------------------------
//SCACCHIERA SEMPLICE
// let rigaPari = '# # # # ', rigaDispari = ' # # # #';
// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(rigaPari);
//     } else {
//         console.log(rigaDispari);
//     };
// }
//-----------------------------------------------------------------------------------------------------
//ESERCIZIO SCACCHIERA
// let scacchiera = '';
// for (let y = 0; y < 16; y++) {
//     for (let x = 0; x < 16; x++) {
//        if (y % 2 === 0) {
//         if (x % 2 === 0) {
//             scacchiera += '#';
//         } else {
//             scacchiera += ' ';
//         }
//        } else {
//             if (x % 2 === 0) {
//                 scacchiera += ' ';
//             } else {
//                 scacchiera += '#';
//             }
//        }
//     }
//     scacchiera += '\n';
// }
// console.log(scacchiera);
//----------------------------------------------------------------------------------------------------
//ALTRA SOLUZIONE SCACCHIERA
// let chessboard = '', size = 8;
// for (let y = 0; y < size; y++) {
//     if (y % 2 === 0) {
//         for (let x = 0; x < size; x++) {
//             if (x % 2 === 0) {
//                 chessboard += ' ';
//             } else {
//                 chessboard += '#';
//             }    
//         }
//     }else {
//         for (let x = 0; x < size; x++) {
//             if (x % 2 === 0) {
//                chessboard += '#';
//             } else{
//                 chessboard += ' ';
//             }
//         }
//     }
// }