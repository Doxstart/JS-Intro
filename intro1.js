console.log('this is a string', 'hello world');
console.log('this is a number', 13.34)
console.log('this is boolean', false);
console.log("I'm legend", 'per includere un apostrofo 1mo modo')
console.log('I\'m tired?', 'per includere un apostrofo 2do modo')
//--------------------------------------------------------------------------------------
//OPERATORI MATEMATICI

console.log('somma', 10+5);
console.log('sottrazione', 10-5);
console.log('moltiplicazione', 10*5);
console.log('divisione', 10/5);
console.log('modulo (resto della divisione)', 10%3);
//---------------------------------------------------------------------------------------
//OPERATORI BOOLEANI

console.log('il numero 11 è pari?', 11%2 === 0);

console.log('potenza', 10 ** 2);
console.log('senza parentesi', 10+5*2)
console.log('con parentesi', (10+5)*2)

console.log('radice quadrata (usando libreria Math)', Math.sqrt(16));

//----------------------------------------------------------------------------------------
//OPERATORI DI STRINGHE

console.log('la casa di mia nonna'+'è molto bella') //concatenazione di stringhe

console.log(`la somma di 5 e 10 è ${10+5}`) //stringa interpolata

//----------------------------------------------------------------------------------------
//OPERATORI DI CONFRONTO

console.log('uguaglianza con conversione','10' == 10); //sbagliato
console.log('uguaglianza senza conversine','10' === 10); //giusto
console.log('uguaglianza tra numeri',10 === 10);
console.log('ugualianza tra strighe','CIAO' === 'CIAO');
console.log('uguaglianza tra booleani','PIPPO' === 'pippo'); //Case sensitive

console.log('disuguaglianza tra numeri', 10!==10);
console.log('disuguaglianza tra stringhe', 'pippo' !== 'pluto');
console.log('disuguaglianza tra booleani', true !== false);

console.log('maggiore', 10>5);
console.log('maggiore o uguale', 10>=10);
console.log('minore', 10<10);
console.log('minore o uguale', 10<=10);

//------------------------------------------------------------------------------------------
//OPERATORI LOGICI

console.log('operatore NOT (true)', !true);
console.log('operatore NOT (false)', !false);

console.log('operatore AND (true true)', true&&true);
console.log('operatore AND (true false)', true&&false);
console.log('operatore AND (false true)', false&&true);
console.log('operatore AND (false false)', false&&false);

console.log('operatore OR (true true)', true||true);
console.log('operatore OR (true false)', true||false);
console.log('operatore OR (false true)', false||true);
console.log('operatore OR (false false)', false||false);

//-------------------------------------------------------------------------------------------
//OPERATORE UNARIO typeof

console.log('typeof 12', typeof 12);
console.log('typeof "hello world"', typeof "hello world");
console.log('typeof true', typeof true);

//--------------------------------------------------------------------------------------------

console.log('infinito positivo', Infinity);
console.log('infinito negativo', -Infinity);
console.log('Not a Number', NaN);
console.log('0 diviso 0', 0/0);

console.log('undefined', undefined);
console.log('null', null);

console.log(!((true&&false) || true));

