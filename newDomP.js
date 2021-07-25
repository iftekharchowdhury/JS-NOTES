// Finding HTML Element by Id
// if id not found it will return Null

const element = document.getElementById('intro')

// console.log(element);

// Finding HTML Elements by Tag Name
var tagName = document.getElementsByTagName("p")

// console.log(tagName);

// Finding HTML Elements by Class Name

var className = document.getElementsByClassName('class');

// console.log(className);

var p1 = document.getElementById('p1')
p1.innerHTML = "This is from DOM JS. i changed HTML VALUE"