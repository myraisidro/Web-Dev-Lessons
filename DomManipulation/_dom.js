const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double CLick
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse down
clearBtn.addEventListener('mousedown', runEvent);

function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    e.preventDefault();
}