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