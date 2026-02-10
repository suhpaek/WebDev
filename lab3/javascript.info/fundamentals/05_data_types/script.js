alert(1/0);//Infinity
alert(Infinity);//same
alert( "not a number" / 2 ); // NaN, such division is erroneous
console.log(9007199254740991 + 2)//ограничение 9007199254740992

const bigInt= 123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "John";

// embed a variable
alert( `Hello, ${name}!` );

alert(`the result is: ${1+2}`); //works only with ``

typeof 0;//number
typeof 10n;//bigint
