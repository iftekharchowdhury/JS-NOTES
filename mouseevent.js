const clearBtn = document.querySelector('.clear-tasks');

const card = document.querySelector('.card');

const heading = document.querySelector('h5');

// click

clearBtn.addEventListener('click', runEvent);

// DoubleClick

clearBtn.addEventListener('dblclick', runEvent);

// Mousedown

clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter

card.addEventListener('mouseenter', runEvent);

// mouseleave

card.addEventListener('mouseleave', runEvent);

//Mouseover 

card.addEventListener('mouseover', runEvent);

// Mouseout

card.addEventListener('mouseout', runEvent);

//event handler

function runEvent(e){
    console.log(`Event type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}


