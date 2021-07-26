// // Finding HTML Element by Id
// // if id not found it will return Null

// const element = document.getElementById('intro')

// // console.log(element);

// // Finding HTML Elements by Tag Name
// var tagName = document.getElementsByTagName("p")

// // console.log(tagName);

// // Finding HTML Elements by Class Name

// var className = document.getElementsByClassName('class');

// // console.log(className);

// var p1 = document.getElementById('p1')
// p1.innerHTML = "This is from DOM JS. i changed HTML VALUE"

// // Changing the Value of an Attribute

// // document.getElementById(id).attribute = new value

// //document.getElementById("myImage").src="data:image/jpeg;base64,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"

// // function validate(){
// //     let x = document.forms["myForm"]["fname"].value;
// //     if(x == ""){
// //         alert("Name must be filled out");
// //         return false;
// //     }
// // }

// // document.getElementById("myBtn").onclick = displayDate;

// const e = document.querySelector('#one')


// const qAll = document.querySelectorAll('#one');

// qAll.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// })
// // console.log(qAll);


// var h3 = document.querySelector('h3');

// var ul = document.querySelector('ul li');

// ul.childNodes;
// // console.log(`this is ul ${ul.childNodes[0].nodeType}`);

// document.querySelector('li:nth-child(odd)').style.background = 'red';

// // create the element 

// const li = document.createElement('li');

// // Add class
// li.className = 'new-list'

// var article = document.createElement('article');

// article.id="new-id"
// article.className = "new-class"

// // now i want to put something between li tag : example
// // <li>Hello world</li>
// // How i put Hello World between this?

// // create textnode for li tag

// liText = "hello world from li tag"
// liChildNode = document.createTextNode(liText);
// li.appendChild(liChildNode);
// // append li as a child to ul

// document.querySelector('#collection').appendChild(li);

// // create the a link element 

// var aElement = document.createElement('a');
// //  need to add classed
// aElement.className = 'delete-item secondary-content'
// aElement.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(aElement);
// console.log(aElement)
// ul.style.color = 'green'
// h3.style.color = 'red'
// // console.log(e)
// // console.log(qAll);
// // console.log(h3);
// // console.log(li);
// // console.log(article);

var ulNew = document.createElement('ul');
var liNew = document.createElement('li');

ulNew.className='new-ul';
liNew.className = 'new-li'


liNew.textContent = 'hello world'
ulNew.appendChild(liNew);


console.log(ulNew);
