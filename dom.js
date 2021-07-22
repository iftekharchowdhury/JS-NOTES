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

//document.getElementById()

console.log(document.getElementById('task-title'));
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';

// taskTitle.style.display = 'none'

// change content 
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">task</span>'

// document.querySelector()

console.log(document.querySelector('#task-title'));

console.log(document.querySelector('.card-title'));

console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:last-child(3)').style.color = 'yellow';
document.querySelector('li:last-child(4)').textContent = 'Hello World';
document.querySelector('li:last-child(odd)').style.background = '#ccc';
document.querySelector('li:last-child(even)').style.background = '#f4f4f4';







// console.log(val)

// console.log (val);
// console.log (allVal);
console.log (accessOneVal);

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = "Hello";

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// convert HTML collections into array
lis = Array.from(lis);
lis.reverse();

lis.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: hello`;
});

console.log(lis);

// document.querySelectorAll

// create the elements

const li = document.createElement('li');

// Add class
li.className = 'collection-item'

// Add id
li.id = 'new-item';

// Add attribute

li.setAttribute('title', 'New Item');

// create text node 

console.log(li);

// removing and replacing elements

// create Element

const newHeading = document.createElement('h2');

newHeading.id = 'task-title';

newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading

const oldHeading = document.getElementById('task-title');

// parent

const cardAction = document.querySelector('.card-action');

// replace

cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const ulLis = document.querySelector('ul');

// Remove list item

lis [0].remove();

// Remove child element 

ulLis.removeChild(lis[3]);

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');

// Event listeners and event objects

document.querySelector('.clear-tasks').addEventListener('click',
onclick);

function onclick(e){

    let val;
    val = e;
    val = e.target;
    val = e.target.id
    val = e.target.className
    val = e.target.classList;
    //event type
    val = e.type 
    val = e.timeStamp;
    // coords event relative to the window

    val = e.clientY;
    val = e.clientX;

     
}

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// DoubleClick
clearBtn.addEventListener('dblclick', runEvent):

// MouseDown

clearBtn.addEventListener('mousedown', runEvent);

// Mouseup

clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter

card.addEventListener('mouseenter', runEvent);
// Mouseleave

card.addEventListener('mouseleave',runEvent);

card.addEventListener('mouseover',runEvent);

card.addEventListener('mouseout',runEvent);

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX},MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor =`rgb(${e.offsetX},
        ${e.offsetY}, 40)`;
}

// keyboard and input events

// set local storage item
localStorage.setItem('name','john');

// set session storage item
sessionStorage.setItem('name', 'beth');




console.log(newHeading);
