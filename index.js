// first js code
console.log('hello world');
//variables
//cannot be reserved word
//should be meaningful
// cannot start with a number
// case sensitive
//cannt contain a space or hyphen(-)
let name = 'faraz';
console.log(name);
let firstName = 'faraz';
let lastName = 'khan';
console.log(lastName);
//constants
const interestRate = 0.3;
console.log(interestRate);
//Primitive types
let stringName = 'Fazi'; //string
let age = 30; //number    
let isApproved = true; //boolean
let midName =undefined; //undefined
let selectColor =null; //null 
//objects
let person={
name: 'Faraz' ,
age: 24
};
//dot notation
person.name= 'mani';
console.log(person);
//array
let selectedColor=['green', 'red']
selectedColor[2]='blue';
console.log(selectedColor);
//function
//performing task
function greet(name , lastName){
    console.log('hello' +  name + '' + lastName) ;
}

greet('Faraz', 'khan');
//calculationg a value
function square(number){
   return number*number;
}
console.log(square(2));
//arithmetic operators
let x=10;
let y=20;
console.logI=(x+y);
console.logI=(x-y);
console.logI=(x*y);
console.logI=(x/y);
console.logI=(x%y);
console.logI=(x**y);
//increment(++)
console.log(++x);
console.log(x);
//decrement(--)
console.log(--x);
console.log(x);
//assignment operator
let z=10;
z=z+5;
z+=5;
z=z*3;
z*=3
//comaprison operator
let f=1;
//relational operator
console.log(f>0)
console.log(f>=1)
console.log(f<1)
console.log(f<=1)
//equality
console.log(f===1);
console.log(f!==1);
//equality operators
//strict equality (type + value)
console.log(1===1);
console.log('1'===1);
//lose equality operator (value)
console.log(1==1);
console.log('1'==1);
console.log(true==1);
//ternary operators
//if a customer has more than 100 points,
//they are a gold customer, otherwise,
//they are a silver customer
let points=90;
let type=points>100 ? 'gold' : 'silver';
console.log(type);
//logical AND (&&) OR(||)
//Returns TRUE if both operands are TRUE 
let highIncome = false;
let goodCreeditScore = false;
let eligibleForLoan = highIncome && goodCreeditScore;
console.log('Eligible',eligibleForLoan);
//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Apllication Refused', applicationRefused);
//logical OR (||)
//Returns TRUE if one of the operands are TRUE
let goodIncome = true;
let highCreditScore =true;
let applicableForLoan = goodIncome || highCreditScore;
console.log(applicableForLoan);
