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


