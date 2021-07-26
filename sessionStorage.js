// set local storage item

localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

// set session storage item
// after closing browser, session storage gone

sessionStorage.setItem('name', 'beth');
// remove from storage
localStorage.removeItem('name');

//get from storage 

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear the storage

localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', 
function(e){
    
    const task = document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    e.preventDefault();
})