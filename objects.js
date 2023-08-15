const circle ={
    radius:1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
circle.draw();
// //Factory function
function createCircle(radius){
    return{
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle1=createCircle(1);
console.log(circle1);

// // //constructor function
// // //pascal notation: OneTwoThree
function Circle(radius) {
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}
const anotherrr = new Circle(1) 
//value vs reference
let obj = { value:10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj);
//Enumering Properties of an object
const circlle={
    radius:5,
    draw(){
        console.log('draw');
    }
}; 
for(let key in circle)
console.log(key, circle[key]);

for (let key of Object.keys(circle))
console.log(key); 

for (let entry of Object.entries(circle))
console.log(entry);

if('radius' in circle) console.log('yes');
const circles={
    radius:1,
    draw(){
        console.log('draw')
    }
}
const another ={}
for (let key in circle)
another[key]=circle[key];
const anothers=Object.assign({}, circle)
const anotherr={...circle};
console.log(another);
// math
function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}
//string primitive
const message ='This is my first message';

//string object
const aanother = new String('hi');


//Template literals
const emp ='John'
const msg =`hi ${emp},
Thank you for joining my mailing list.
Regards,
Faraz ` 

//date
 const now = new Date();
 const date1 = new Date('May 11 2018 9:00');
 const date2 = new Date(2018, 4, 11,9);

 now.setFullYear(2023);

 //exercise 1 Address Object
// let address={
//     street:'a',
//     city:'Lahore',
//     zipCode:'723142'
// };
// function showAddress(address){
//     for(let key in address)
//     console.log(key,address[key]);
// }
// showAddress(address)

//exercise Factory function
// let address = createAddress('a','Lahore','772572');
// console.log(address);
// function createAddress(street, city, zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     };
// }

//constructor function
// let address = new Address('a','Lahore',72123)
// console.log(address);
// function Address(street, city, zipCode){
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

//Exercise object equality
let address1= new Address('a','b','c');
let address2= new Address('a','b','c');
console.log(areEqual(address1,address2));
console.log(areSAme(address1, address2));

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
function areEqual(address1, address2){
return address1.street === address2.street &&
address1.city === address2.city && address1.zipCode === address2.zipCode
}
function areSAme(address1, address2){
    return address1 === address2;
}
//Exercise blog post object
// let post={
//     title: 'SA',
//     body: 'd',
//     author: 'khan',
//     views: 9090, 
//     comments:[
//         {author: 'a', body: 'b'},
//         {author: 'c', body: 'd'}
//     ],
//     isLive: true
// };
// console.log(post);

//construtor function
let post = new Post('a','b','c');
console.log(post);
function Post(title, body, author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}