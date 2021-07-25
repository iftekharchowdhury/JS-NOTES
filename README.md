## var, let, const

> var = var used for variable assign. globally 
> let = declare variable in the scope
> const = can't change the value

## Data types in JavaScript

1. Primitive Data types
> string, Number, Boolean, Null, Undefined, Symbols(ES6)
2. Reference Data types



## string methods

concat methond
toUpperCase()
toLowerCase()
indexOf('2')

lastIndexOf
charAt
substring
slice(0,4)
> split : str.split()
> replace()
> includes()

### template literals

**without template strings( es5)**
```
html =
"<ul>"+
"<li>Name:" + name +"</li>"+
"<li>Name:" + age +"</li>"+
"<li>Name:" + city +"</li>"+
"<li>Name:" + job +"</li>"+
"</ul>"
```

## ARRAYS

```
const numbers = [43,44,59,36]
const numbers2 = new array(193,1939,2,2,4,45);
const fruit = ['Apple', 'Banana', 'orange'];
const mixed = [22,'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

val = numbers. length;

check if is array
val = Array.isArray(numbers);

val = numbers [3];
val = numbers [0];
numbers[2] = 100;
val = numbers.indexOf(36);

add value end of the array
numbers.push(250)
// add value front - first position
numbers.unshift(120)
Take off from end

numbers.pop()
numbers.shift();
// splice values
numbers.splice(1,4);
//reverse
numbers.reverse()

//concat arrays
val = numbers.concat(numbers2)

//sorting arrays
val = fruit.sort()

val = numbers.sort()


```

## Object Literals

```
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address:{
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2018- this.age;
    }

}

let val;

val =person;
// Get specific value
val = person.firsName
val = person['lastName']
val = person.age;
val = person.hobbies;
val = person.address.state
val = person.getBirthYear();
val = person.address.city;
console.log(val);
```

## Dates and Times

```
let val;
const today = new Date();
const birthday = new Date(
    '9-10-1981 11:25:00'
);

val = today;

val = birthday;

val = today.getMonth();

val = today.getDate();

val = today.getDay();

val = today.getFullYear();

val = today.getHours();

val = today.getMinutes();

val = today.getSeconds();

val = today.getMilliseconds();

birthday.setMonth (2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(val);
console.log(birthday);

```

## if-else

```
const id = 100;
if (typeof id!= 'undefined'){
    console.log(`The ID is ${id}`);
}else {
    console.log('NO ID');

}

```
> //Greater or less than
```
if (id > 200){
    console.log('correct');
}else{
    console.log('incorrect');
}
```

> // IF ELSE
```
const color = 'yellow';

if (color=='red'){
    console.log('color is red');
}else if (color=='blue'){
    console.log('Color is blue');
}else{
    console.log("color is not red or blue");
}
```
```
const name = 'steve';
const age = 20;

if (age>0 && age<12){
    console.log(`${name} is a child`);
}else if (age>=13 && age <=19){
    console.log(`${name} is a teenager`);
}else {
    console.log(`${name} is an adult`);
}
```
> // OR ||
```
if (age < 16 || age>65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} is registered for the race`);
}
```
## Switch 

```
const color = 'yellow'

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday'
        break;
    case 2:
        day = 'Tuesday'
        break;
    case 3:
        day = 'Wednesday'
        break;
    case 4:
        day = 'Thursday'
        break;
    case 5:
        day = 'Friday'
        break;
    case 6:
        day = 'Saturday'
        break;
}
console.log(`Today is ${day}`);

```
## Function declaration and Expression


> // empty param
```
function showName(){

    return 'iftekhar';
}

```


> // function with param
```
function addTwoNumbers(num1, num2){
    sum = num1+num2;
    return sum;
}

```

> // Default param
```
function multiplication(num1=2, num2=3){
    total = num2 * num1
    return total;
}
```

> // property methods

```
const todo  = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.add();
todo.edit(1);

console.log(multiplication());
console.log(addTwoNumbers(1,2));
console.log(showName())

```

## FOR LOOP :fist:

> // FOR LOOP 

```
for (let i = 0; i < 10; i++){
    if (i == 2){
        console.log('2 is my favorite number');
        continue;
    }
    if (i === 5){
        console.log('stop the loop')
        break;
    }
    console.log('number '+i);
}

```
> // WHILE LOOP
```
let i = 0;

while(i<10){
    console.log('Number '+i);
    i++;

}
```

> // DO WHILE

```
let i = 0;

do {
    console.log('Number '+i);
    i++;
}while(i<10);

```
```
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);

}
```

> // ForEach
```
cars.forEach(function(car){
    console.log(car);
});
```

> // MAP

```
const users = [
    {id:1, name: 'JOHN'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'},
    {id:4, name: 'JOHN'},

];

const ids = users.map(function(user){
    return user.id, user.name;
})

console.log(ids)
```

> // FOR IN LOOP

```
const info = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user){
    console.log(`${x}: ${user[x]}`);
}
```

## Block scope with let and const :weary:

```
// Global scope

var a = 1;
let b =2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function scope: ', a,b,c);
}

test();

if (true){
    // block scope
    var a = 4;
    let b =5;
    const c = 6;
    console.log('if scope:', a,b,c)
}

for (var a=0;a<10; a++){
    console.log(`Loop: ${a}`)
}


console.log('Global scope: ', a,b,c);

```

## Play with DOM

```
console.dir(document)
let headerElement = document.getElementById('header');
console.log(headerElement.textContent);
console.log(headerElement.innerText);
console.log(headerElement.innerHTML);


```
> getElementById living in Prototype chain

```
let items = document.getElementByClassName('item');
for (let i=0; i<items.length; i++){
    items[i].style.color = 'red';
}

```
> Get ELEMENT BY TAGNAME

```
let items = document.getElementByTagName('h2');
console.log(items);

```

// Query Selector

```
let lastItem = document.querySelectorAll('.item:nth-child(4)');

lastItem.style.color = 'red'

```

> creating an element

```
const divElement = document.createElement('div')
divElement.className = 'red';

divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
container.appendChild (divElement, document.createElement('p'), 'hello world');

```

## Document object

> window is a global object.
> document is a attribute of window object.

```
let val;
val = document;
allVal = document.all
accessOneVal = document.all[7]
val = document.head;
bodyVal = document.body;
doctypeVal = document.doctype;
domainVal = document.domain;
urlVal = document.URL
CharacterSetVal = document.characterSet;
contentTypeVal = document.contentType;

formsVal = document.forms
formsZero=document.forms[0];
formsId = document.forms[0].id;
formsMethod = document.forms[0].method;
formsAction = document.forms[0].action;

documentLinks = document.links;
documentLinks = document.links[0];
documentLinks = document.links[0].id;
documentLinks = document.links[0].className;
documentLinks = document.links[0].classList[0];

docImages = document.images;

docScripts = document.scripts;

docScripts = document.scripts[2].getAttribute('src');



// console.log(val)

// console.log (val);
// console.log (allVal);
console.log (accessOneVal);
```
## HTTP Requests

> **GET**: Retrieve data from a specified resource
> **POST**: Submit data to be processed to a specified resource
> **PUT**: Update a specified resource
> **DELETE**: Delete a specified resource
> **HEAD**: Same as get but does not return a body
> **OPTIONS**: Returns the supported HTTP methods
> **PATCH**: update partial resource

## Callback Functions

**it's just a function nothing else**

<blockquote>A callback function is a function that passed in as a parameter to another function and then it's ran inside the function body.</blockquote>

## this keyword

To understand this we need to follow these 4 rules

1. implicit binding
2. explicit binding
3. new binding
4. window binding

1. implicit binding = we checked in which line func is calling.
2. function is accessed by **dot(.)** notation.
3. syntax is like **obj.function()**

```
var shakib = {
    name: 'sakib',
    age: 35,
    printPlayerName: function(){
        console.log(this.name);
    }
}
shakib.printPlayerName();

```



```
var printPlayerNameFunction = function (obj){
    obj.printPlayerName = function (){
        console.log(this.name)
    }
}

var play1 = {
    name: 'player one',
    age: 35,
};

var play2 = {
    name: 'Player two',
    age: 40,
};


console.log(printPlayerNameFunction(play1));

console.log(printPlayerNameFunction(play2));

console.log(play1.printPlayerName());
console.log(play2.printPlayerName());

```
### explicit example - call(), apply(), bind()

```
v1 = 'good'
v2 = 'coder'

function player3(v1,v2, level){
    
    console.log(`${this.name} age is ${this.age} and he is ${v1}, ${v2} ${level}`)
}

var play3 = {
    name: 'joy',
    age: 20,
    version: "v1"
};



// explicitly calling player3 function using call function

// player3.call(play3, v1, v2)

// if we want to pass an array, call func can't take array

var level = [1,2,3]

player3.apply(play3, level);

```


