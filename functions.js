//Function Declaration
function walk(){
    console.log('walk');
};

//Function Expression 
let run =function(){
    console.log('run');
};
run();
walk();

//Arguments
function sum(){
    let total = 0;
    for (let value of arguments)
    total += value;
    return total;
}
console.log(sum(1,2,3,4,5,10,3));

//The Rest Operator
 function som(discount, ...prices){
const total=  prices.reduce((a,b) => a+ b);
return total * (1 - discount)
 }
 console.log(som(0.1, 35, 50));

 //Defaulting Parameters
 function interest(principle, rate=3.5, years=5){
 return principle * rate / 100 * years;
 }
 console.log(interest(10000));

 //Getters and Setters
 //getters => access properties
 //setters => change (mutate) them
//  const person={
//      firstName:'Faraz',
//      lastName:'Khan',
//      get fullName(){
//          return `${person.firstName} ${person.lastName}`;
//      },
//      set fullName(value){
//         const parts = value.split('  ');
//          this.firstName = parts[0];
//          this.lastName = parts[1];
         
//      }
//  };
//  person.fullName = null;
//  console.log(person );

//Try and Catch error handling
 const person={
     firstName:'Faraz',
     lastName:'Khan',
     get fullName(){
         return `${person.firstName} ${person.lastName}`;
     },
     set fullName(value){
         if(typeof value !== 'string')
         throw new Error('value is not a string');
        const parts = value.split('  ');
        if(parts.length !== 2)
        throw new Error('enter first and last name');
         this.firstName = parts[0];
         this.lastName = parts[1];
         
     }
 };
 try{
 person.fullName = 'john smith';
 }
 catch (e){
     alert(e);
 }
 console.log(person );

 //local vs global
 const color='red';
 function start(){
     const message = 'hi';
     const color = 'blue';
     console.log(color);
 }

 function stop(){
     const message = 'bye';
 }

 start();