//Adding elements
const numbers =[3, 4];

// End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2) ;

//Middle 
numbers.splice(3, 0, 'a', 'b');
console.log(numbers);

//Finding Elements (Primitives Types)
const number=[1, 2, 3, 1, 4];
console.log(number.indexOf(1, 2));
console.log(number.lastIndexOf(1));

console.log(number.indexOf(1) !== -1);
console.log(number.includes(1)) 

//Finding Elements (Reference Types)

// const courses=[
//     {id: 1, name:'oop'},
//     {id: 2, name:'pf'},
// ];
// const course=courses.findIndex(function(course){
//     return course.name === 'oop';
// });
// console.log(course);

//Arrow Functions
const courses=[
    {id: 1, name:'oop'},
    {id: 2, name:'pf'},
];
const course=courses.find(course => course.name === 'oop');
console.log(course);

//Removing Elements
const numb=[1, 2, 3, 4];

//End
const last=numb.pop();

//Beginning
const first=numb.shift()
 
// //Middle
numb.splice(2, 1)
console.log(numb);

//Emptying an Array
let int =[1, 2, 3, 4]
let another=int;

//solution 1
int=[];

//solution 2
int.length=0;

//solution 3
int.splice(0, int.length);

//solution 4
while(int.length > 0)
int.pop()
console.log(int);
console.log(another)

//combining and slicing
// const firsts =[{id:1}];
// const second =[4, 5, 6];

// const combined=firsts.concat(second);
// firsts[0].id=10;
// const slice=combined.slice(2)

// console.log(combined);
// console.log(slice);

//The spread operator
const firsst =[1, 2, 3];
const second = [4, 5, 6];

const combined =[...firsst, ...second];
const copy =[...combined];

console.log(combined);

//Iterating an array 
const numbber= [1,2,3];
for (let number of numbber)
console.log(numbber);
number.forEach((number, index) => console.log(numbber, index));

//joininig arrays
   const num =[1, 2, 3]
   const joined=num.join(',');
   console.log(joined);

   const message = 'This is my last message';
   const parts = message.split(' ');
   console.log(parts);

   const combine= parts.join('-');
   console.log(combine);

   //Sorting arrays
   const no=[2, 3, 1];
   no.sort();
   console.log(no);
   
   no.reverse();
   console.log(no);

   const coursess=[
     {id: 1, name:'Node.js'},
     {id: 2, name:'javascript'}
   ];
    coursess.sort(function(a, b){
        //a < b =>-1
        //a > b =>1
        //a === b => 0
        const nameA=a.name.toLowerCase();
        const nameB=b.name.toLowerCase();

        if(nameA < nameB) return -1; 
        if(nameA > nameB) return 1;
        return 0;
    });
    console.log(coursess);

    //Testing the elements of an array

    const nnumbers= [1, -1,  2, 3]
    const allPositive=nnumbers.every(function(value){
       return value >= 0
    });
    console.log(allPositive); 
     
    const nnnumbers= [1, -1,  2, 3]
    const atLeastOnePositive=nnumbers.some(function(value){
       return value >= 0
    });
    console.log(atLeastOnePositive); 
     
    //Filtering an Array
    // const nomber=[1, 2, -3, -4]
    //  const filtered = nomber.filter(value => value >= 0 );
    // console.log(filtered);
    
    //Mapping an Array

    // const nomber=[1, -1, 2, 3]
     
    // const items= nomber
    // .filter(n => n >= 0 )
    // .map(n => ({value : n}))
    // .filter(obj => obj.value > 1)
    //  .map(obj => obj.value);

    // console.log(items);  

    //Reducing an array
    // const nomber =[1, -1, 2, 3];
   
    // const sum = nomber.reduce((accumulator,  currentValue) => accumulator + currentValue
    // );
    // console.log(sum);

    //Exercise Array from Range
    const list = arrayFromRange(-10,-4);
    console.log(list);

    function arrayFromRange(min,max){
        const output= [];
        for (let i=min; i <= max; i++)
        output.push(i);
        return output;
    }

    //Exercise Includes 

// const nomber=[1, -1, 2, 3];
// console.log(includes(nomber, 4));

// function includes(array, searchElement){
//     for (let element of array)
//     if (element === searchElement)
//     return true;
//     return false;
// }

//Exercise Except
// const nomber = [1, 2, 3, 4];
// const output = except(nomber,[1,4]);
// console.log(output);

// function except(array, excluded){
//     const output=[];
//     for (let element of array)
//     if(!excluded.includes(element))
//     output.push(element);
//     return output;
// }

//Exercise Moving an Element
const nomber=[1, 2, 3, 4];
const output= move(nomber, 1, -1 );

console.log(output);

function move(array, index, offset){
const position = index +offset;
if( position >= array.length ||position < 0 ) {
    console.error('Invalid Offset');
    return;
}
const output=[...array];
const element = output.splice(index, 1)[0]
output.splice(index + offset, 0, element);
return output;
}

//Count Occurrence
const nombers=[1, 2, 3, 4];
const count =countOccurrence(number, 1);
console.log(count);

function countOccurrence(array, searchElement){
  //simple implementation
    // let count=0;
    // for(let element of array)
    // if(element === searchElement)
    // count++;
    // return count; 
//}
//reducing method
return array.reduce((accumulator, current) =>{
const occurrence=(current === searchElement) ? 1 : 0;
console.log(accumulator, current, searchElement); 
return accumulator + occurrence;

},0);
}

//Exercise Get Max
const namber = [1,2, 3, 4];
const max = getMax([3]);
console.log(max);

function getMax(array){
    if (array.length === 0) 
    return undefined;
   
    // let max = array[0];

    // for(let i=1; i < array.length; i++)
    // if (array[i] > max)
    // max = array[i];
    // return max;
    return array.reduce((a, b) => (a > b) ? a : b
    );
}

//Exercise
const movies=[
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];
const titles = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)
console.log(titles)
