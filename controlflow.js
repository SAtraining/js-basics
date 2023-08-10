//control flow
//if else
let hour = 22;
if(hour >= 6 && hour < 12)
console.log('Good Morning!');
else if(hour>=12 && hour < 18)
console.log('Good Afternoon!');
else
console.log('Good Evening!');
//for loop
for(let i=0; i <= 5;  i++){
if (i % 2 !==0) console.log(i);
}
//while loop
let i=0;
while(i <= 5) {
    if(i % 2 !== 0) console.log(i)
    i++;
}
//do while
let zo=0;
do{
    if(zo % 2 !== 0) console.log(zo);
    zo++
}while(zo<=5);
//for-in
const man={
name:'faraz',
age: 24
};
for(let key in man)
console.log(key , man[key]);
//for-of
const colours =['black' , 'yellow' , 'orange'];
for(let color of colours)
console.log(color);
//exercise
//Max of two numbers
let num= max(5 , 10);
console.log(num);
function max(a, b){
    return(a > b) ? a : b; 
}
//landscape or potrait
console.log(isLandscape(800, 900));
function isLandscape(width, height){
    return(width> height)
}
//FizzBuzz exercise
//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by both 3 or 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//not a number => 'not a number'
const output = fizzBuzz();
console.log(output);
function fizzBuzz(input){
    if (typeof input !== 'number')
    return 'not a number';
    if((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if(input % 3 ===0)
    return 'Fizz';
    
    if (input % 5 === 0)
    return 'Buzz';
    
    return input;

}
//demerit points exercise
//spped limit = 70
//5 -> 1 point
//Math.floor
//12 points -> suspend

checkSpeed(130);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
if(speed < speedLimit + kmPerPoint)
console.log('ok')
else{
    const points=Math.floor((speed -speedLimit) / kmPerPoint)   
    if(points>=12)
    console.log('License Suspended');
    else
    console.log('POINTS',points);
}
}
//exercise even and odd numbers

showNumber(18);
function showNumber(limit){
    for(let i=0; i<=limit; i++){
        if(i % 2 === 0) console.log(i, 'EVEN');
        else
        console.log(i,'ODD')
}
}
//count truthy value
 const array=[0,null,undefined, 1,2,3,4]
 console.log(countTruthy(array));
 function countTruthy(array){
     let count = 0;
     for(let value of array)
     if(value)
     count++;
     return count;
 }
 //exercise String Properties
 const movie={
     title:'a',
     releaseYear: 2019,
     rating: 4.5,
     director:'b'
 };
 showProperties(movie);
 function showProperties(obj){
     for(let key in obj) 
     if(typeof obj[key] === 'string')
     console.log(key, obj[key]);
 }
//exercisesum of multiples 3 and 5
console.log(sum(10));

function sum(limit){
    let sum = 0;
    for(i = 0; i <= limit; i++)
    if(i % 3 === 0 || i % 5 === 0)
    sum += i;

    return sum;
}console.log()
//exercise grade
 const marks=[93, 90, 90];
 console.log(calculateGrade(array));
 function calculateGrade(marks){
     const average = calculateAverage(marks);
     if (average < 60) return 'F';
     if (average < 70) return 'D';
     if (average < 80) return 'C';
     if (average < 90) return 'B';
     return 'A';
 }
 function calculateAverage(array){
    let sum = 0;
    for (let value of array)
    sum += value;
    return sum / array.length;

 }
 //exercise stars
 showStars(5)
 function showStars(rows){
     for (let row=1; row <= rows; row++){
         let pattern = '';
         for(let i = 0; i < row; i++)
         pattern += '*';
         console.log(pattern);
     }
 }
 //exercise prime number
 showPrimes(30);
 function showPrimes(limit){
     for(let number =2; number<=limit; number++)
         if (isPrime(number)) console.log(number); 
    }
    function isPrime(number){
        let isPrime=true;
        for(let factor = 2; factor<number; factor++) 
            if (number % factor ===0)
                return false;

        return true;
}