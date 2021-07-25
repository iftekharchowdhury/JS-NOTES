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
> constructor function
>  new binding

```
function place(name, address, road){
    this.name = name;
    this.address = address;
    this.road = road;
    console.log(`${this.name} ${this.address} ${this.road}`);
    if (this.name == 'ctg'){
        this.name = 'Chittagong';
    }
    console.log(`${this.name} ${this.address} ${this.road}`);
}

var p1 = new place('ctg', 'medical', 'm ali road');
p1;

console.log(typeof(p1));

```
**The innerHTML Property**
> The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

**The getElementById Method**
> The most common way to access an HTML element is to use the id of the element.

## Finding HTML Elements

> Find an element by element id `document.getElementById(id)`
> Find elements by tag name `document.getElementsByTagName(name)` 
> Find elements by class name `document.getElementsByClassName(name)`

## Changing HTML Elements

> Change the inner HTML of an element `element.innerHTML =  new html content`
> Change the attribute value of an HTML element `element.attribute = new value`
> Change the style of an HTML element `element.style.property = new style`
> Change the attribute value of an HTML element `element.setAttribute(attribute, value)`

## Adding and Deleting Elements

> Create an HTML element `document.createElement(element)`
> Remove an HTML element `document.removeChild(element)`
> `document.appendChild(element)`	Add an HTML element
> `document.replaceChild(new, old)`	Replace an HTML element
> `document.write(text)`	Write into the HTML output stream

### Finding HTML Element by Id
```
const element = document.getElementById('intro')

console.log(element);

```

> **if id not found it will return Null**

## Finding HTML Elements by Tag Name

```
var tagName = document.getElementsByTagName("p")
console.log(tagName);

```

## Finding HTML Elements by Class Name

```
var className = document.getElementsByClassName('class');

console.log(className);
```

## JavaScript HTML DOM - Changing HTML

### Changing HTML Content

> The easiest way to modify the content of an HTML element is by using the innerHTML property.

```
var p1 = document.getElementById('p1')
p1.innerHTML = "This is from DOM JS. i changed HTML VALUE"

```

## Changing the Value of an Attribute

> Changing the Value of an Attribute

> document.getElementById(id).attribute = new value
```
document.getElementById("myImage").src="data:image/jpeg;base64,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"
```


## JavaScript Form Validation

suppose you want validate HTML input box. if the box is empty, you will give user a alert<br>
```

function validate(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("Name must be filled out");
        return false;
    }
}

```