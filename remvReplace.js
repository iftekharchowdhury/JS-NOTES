// const h1 = document.createElement('h1');

// var newH2 = document.createElement('h2');

// h1.className = 'heading-new'
// newH2.className = 'heading-new-2'

// h1.appendChild(document.createTextNode('Replace Heading'));

// newH2.appendChild(document.createTextNode('Replace Heading number two'));

// var oldH1 = document.getElementById('title');

// var oldH2 = document.getElementById('second-header');

// var cardAction = document.querySelector('.card-action');
// var secondDiv = document.querySelector('.second-div');

// // replace
// cardAction.replaceChild(h1, oldH1);
// // replaceChild func param: first param new element/changes , second param: old element / changes

// secondDiv.replaceChild(newH2, oldH2);


// // Remove element 

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item

// lis[0].remove();

// // remove child element

// list.removeChild(lis[3]);

// // Classes & ATTR 

// var firstLi = document.querySelector('li:first-child');

// var link = firstLi.children[0]

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attributes

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', google);
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link 


// console.log(val);

// // console.log(h1)
// // console.log(oldH1)
// // console.log(cardAction);

// // console.log(newH2);
// console.log(secondDiv);
// console.log(oldH2);

// event 

document.querySelector('.clear-tasks').addEventListener('click',onclick);

function onclick(e){
    // console.log('clicked');
    let val;
    val = e;
    val = e.target;
    val = e.target.classList
    val = e.target.className // show the button class name

    e.target.innerText = 'Hello'; // this will change the button name after clicking the button
    // event type
    val = e.type;
    // timestamp
    val = e.timeStamp;

    // coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    
    console.log(val);
}