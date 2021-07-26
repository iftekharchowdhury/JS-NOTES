const form = document.querySelector('form')
const taskInput = document.getElementById('task');

// clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

//keydown
taskInput.addEventListener('keydown', runEvent);

// input 

taskInput.addEventListener('input', runEvent);

// keypress
taskInput.addEventListener('keypress', runEvent);

// keydown
taskInput.addEventListener('keydown', runEvent);

// focus
taskInput.addEventListener('focus', runEvent);

taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);
function runEvent(e){
    console.log(`Event type: ${e.type}`);
    console.log(taskInput.value);
    e.preventDefault();
}
console.log(form);