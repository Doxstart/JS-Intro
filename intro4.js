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

//3zo esercizio
// function chartrue (i){
//     let cavolo = "";
//     if (i.length > 10){
//         cavolo += "vero";
    
//     } else{
//         cavolo += "falso";
    
//     }
//     return cavolo
// }
// console.log(chartrue('ciaociaociao'));

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

