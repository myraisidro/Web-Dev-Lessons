const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double CLick
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse leave
// clearBtn.addEventListener('mouseleave', runEvent);

// Mouse over
// clearBtn.addEventListener('mouseover', runEvent);

// Mouse out
// clearBtn.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);


function runEvent(e){
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;

    // e.preventDefault();
}