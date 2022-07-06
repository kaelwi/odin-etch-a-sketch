let mode = 'normal';
let bgr = '#000000';
let isDrawing = false;

const grid = document.getElementById('grid');
const normal = document.getElementById('normal');
const rainbow = document.getElementById('rainbow');
const erase = document.getElementById('erase');
const color = document.getElementById('color');
const clear = document.getElementById('clear');
const size = document.getElementById('size');

function createGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    
    document.documentElement.style.setProperty("--columns-row", size);

    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid #e2dede';
        document.getElementById('grid').appendChild(div);
    }
}

createGrid(size.value);

grid.addEventListener('mousedown', function(e) {
    isDrawing = true;
    e.target.style.background = bgr;
})

grid.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        e.target.style.background = bgr;
    }
})

grid.addEventListener('mouseup', function(e) {
    isDrawing = false;
})

erase.addEventListener('click', () => {
    color.value = '#ffffff';
    bgr = color.value;
    document.getElementById(mode).classList.toggle('selected');
    erase.classList.toggle('selected');
    mode = 'erase';
})

color.addEventListener('input', () => {
    bgr = color.value;
})

clear.addEventListener('click', () => {
    const divs = document.querySelectorAll('#grid *');
    divs.forEach (div => {
        div.style.background = '#ffffff';
    });
})

size.addEventListener('change', () => {
    createGrid(size.value);
})






