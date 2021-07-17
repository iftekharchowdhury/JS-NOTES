// // console.log(name);
// // var name= 'iftekhar'
// // console.log(name)
// // let x = 1
// // console.log(x)

// let y;
// console.log(y) // undefined

// // PRIMITIVE Data types

// //string 

// const name = 'John Doe';

// // Number

// const age = 49;

// // Boolean

// const hasKids = true

// // Null 

// const car = null;

// // undefined 

// let test;

// const sym = Symbol()

// console.log(typeof name)
// console.log(typeof car)
// console.log(typeof age)
// console.log(typeof hasKids)

// // REFERENCE types = Objects
// //array
// const hobbies = ['movies', 'music']

// // object literal 

// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// const today = new Date()

// console.log(today)
// console.log(typeof today)

// string to number

// val = Number('5')
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val = Number('hello') // NaN = not a number

// val = parseInt('100.30') // parse only integer 100



// console.log(val);
// console.log(typeof val);

// console.log(val.toFixed())

// const val1 = String(5);

// const val2 = 6;

// const sum = Number(val1 + val2)

// console.log(sum);
// console.log(typeof sum)

// let x = 5;
// let y = 2;

// let z = x + y;

// console.log(z)

//let x = 10;

// let text1 = "John";
// let text2 = "Doe";

// let text3 = text1 + " " + text2
// console.log(text3)

// let text1 = "what a very "
// text1 += "nice day";

// //console.log(text1)

// let x = 5 + 5;

// let y = "5" + 5;

// let z = "hello" + 5

// console.log(x,y,z)
// console.log(typeof y)

// console.log(typeof z)
// // alert(10* 5);

// let num1 = 5;
// let num2 = 2;

// let total = num1%num2;
// console.log(total)

// let num3 = 10;
// num3++;
// let num4 = num3;
// console.log(num4);

// let num5 = 5;
// num5--;
// let num6 = num5
// console.log(num6)

// let num7 = 5;
// let num8 = num7 ** 2;
// console.log(num8);

// let length = 16;

// let lastName = "JOHNSON";

// let obj1 = {firstname:"JOHN", lastname:"Doe"}

// console.log(obj1)

// obj1.firstname = "iftekhar"

// console.log("after change the name: ",obj1)

// // Boolean 

// bol1 = true

// bol2 = bol1

// if (bol1){
//     console.log("true")
// }else{ console.log("false")}

// // arrays 

// const cars = ["Saab", "Volvo", "BMW",1 , 1.0, {name:"joy"}, x=true];

// console.log(cars);

// let bmw;
// console.log(bmw)


// // object key-value pair 

// const full_name = {

//     'firstName': 'Shuovik',
//     'lastName': 'Sarkar'


// }

const nam = 'john'
const age = 30;
const job = 'web developer'
const city = 'Miami'
let html;

// html =
// "<ul><li>Name:" + nam +"</li><li>Age:" + age +"</li><li>city:" + city +" </li><li>JOB:" + job +" </li></ul>"
// // console.log(full_name)

// console.log(html)
// document.body.innerHTML= html  

// same code es6 (template literals)

html = 
`
<ul>
<li>Name: ${nam}</li>
<li>AGE: ${age}</li>
<li>City: ${city}</li>
<li>JOB: ${job}</li>
</ul>
`
document.body.innerHTML= html  