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
document.getElementById("myImage").src="smiley.jpg"
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

> Server side validation is performed by a web server, after input has been sent to the server.

> Client side validation is performed by a web browser, before input is sent to a web server.

# JavaScript HTML DOM Events
## Reacting to Events

A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.<br>

`onclick=JavaScript`

Examples of HTML events:

> When a user clicks the mouse
> When a web page has loaded
> When an image has been loaded
> When the mouse moves over an element
> When an input field is changed
> When an HTML form is submitted
> When a user strokes a key



# synchronous and Asynchronous

## synchronous blocking behavior 

<blockquote>
Suppose, At a hotel, there is two customer table and one waiter. So, waiter first goes to 
user 1 table and take the order, go the kitchen and until the chef finished the meal, waiter is
waiting for food. After getting the meal for customer one, waiter served the meal customer 1
and then waiter goes to second user/ table. <br/>

**Waiter = thread , table= user. One step at a time**
</blockquote>

```
const processOrder = (customer) => {
    console.log(`processing order for customer 1`);

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`order processed for customer 1`);
};

const processOrder2 = (customer) => {
    console.log(`processing order for customer 2`);

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());

    console.log(`order processed for customer 2`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);


console.log(`take order for customer 2`);
processOrder2();
console.log(`completed order for customer 2`);

```

## Asynchronous

> setTimeout is asynchronous function.

```
const processOrder = (customer) => {
    console.log(`processing order for customer 1`);

    setTimeout(()=>{
        console.log(`cooking completed`);
    }, 3000);



    console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder();
console.log(`completed order for customer 1`);

```

# What is Ajax?

> Asynchronous javascript & XML
> Set of web tech
> Send & Recv data asynchronously
> Does not interfere with the current page
> No page reload
> Fetch data
> Make async requests in the background


## xmlHttpRequest Object

> API in the form of an object
> Provided by the browsers JS environment

if we want to make HTTP request, then we need this object.
<br>

**Right now, there’s another, more modern method fetch, that somewhat deprecates XMLHttpRequest.**

> XMLHttpRequest has two modes of operation: synchronous and asynchronous.
> Create XMLHttpRequest `let xhr = new XMLHttpRequest();` <br>

`xhr.open(method, URL, [async, user, password])`  <br>

> method – HTTP-method. Usually "GET" or "POST".
> URL – the URL to request, a string, can be URL object.
> async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
> user, password – login and password for basic HTTP auth (if required).<br>

> Send it out. `xhr.send([body])` -This method opens the connection and sends the request to server.<br>

> These three events are the most widely used:

1. load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.
2. error – when the request couldn’t be made, e.g. network down or invalid URL.
3. progress – triggers periodically while the response is being downloaded, reports how much has been downloaded

## Code example

```
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // create an xhr object
    const xhr = new XMLHttpRequest();
    // open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if (this.status === 200){
            // console.log(this.responseText);
            // document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
            document.getElementById('output').innerHTML = `<h1>${this.response}</h1>`
        }
    }
    xhr.send();
}
```

## what is css selector

<p>A CSS selector is the first part of a CSS Rule. It is a pattern of elements and other terms that tell the browser which HTML elements should be selected to have the CSS property values inside the rule applied to them. The element or elements which are selected by the selector are referred to as the subject of the selector.</p><br>

## Why CSS selector is used?
<p>CSS selectors are used to "find" (or select) the HTML elements you want to style.example:h1,p..etc tag<p/><br/>

# What's the difference between querySelector and getElementById?

<p>
The querySelector() method returns the first element that matches the specified css selectors. The getElementById() method returns the first element that matches the given id in the DOM.</p><br/>

# Callback function

A callback function is a function which is:<br>

1. accessible by another function, and
2. is invoked after the first function if that first function completes

```
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}
function alertFinished(){
  alert('Finished my homework');
}
doHomework('math', alertFinished);
```

# ES6 Promises

> **Promises in JavaScript**
<br>
> There are 3 states of the Promise object:
1. Pending: Initial State, before the Promise succeeds or fails
2. Resolved: Completed Promise
3. Rejected: Failed Promise

<blockquote>when we request data from the server by using a Promise, it will be in pending mode until we receive our data.</blockquote>
<br>
If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.<br>

## What is the difference between Callbacks and Promises?

<blockquote>The main difference between Callback Functions and Promises is that we attach a callback to a Promise rather than passing it. So we still use callback functions with Promises, but in a different way (chaining).</blockquote>

## Creating and Using A Promise Step by Step

> Firstly, we use a constructor to create a Promise object:

`const myPromise = new Promise();`

> It takes two parameters, one for success (resolve) and one for fail (reject):

```
const myPromise = new Promise((resolve, reject) => {  
    // condition
});
```
> Finally, there will be a condition. If the condition is met, the Promise will be resolved, otherwise it will be rejected:

```

const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

```
## then( ) for resolved Promises:


`myPromise.then();`<br>

The then( ) method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise.<br>

```
myPromise.then((message) => {  
    console.log(message);
});

```

## catch( ) for rejected Promises:

> **then( ) method is only for resolved Promises**. What if the Promise fails? Then, we need to use the catch( ) method.

```
myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { 
    console.log(message);
});
```

## fetch API

<blockquote>allows you to make HTTP requests to servers from web browsers. 

**If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.**.

### Sending a Request

<p>fetch() requires only one param. **URL** . </p><br>

The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:

```
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
```
## Reading the Response

> If the contents of the response are in the raw text format, you can use the text() method.<br>

```
fetch('/readme.txt')
    .then(response => response.text())
    .then(data => console.log(data));
```

<blockquote>    

**Third Party API** 
<br>
> Get from external API

```
function getExternal() {
    fetch('https://api.github.com/users') //url 
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
          output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
      })
      .catch(function(err){
        console.log(err);
      });
  }


```
</blockquote>


</blockquote>