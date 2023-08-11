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