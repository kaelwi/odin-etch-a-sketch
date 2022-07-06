function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid black';
        document.getElementById('grid').appendChild(div);
    }
}

createGrid();

let mode = 'normal';
let bgr = '#000000';
let isDrawing = false;

const grid = document.getElementById('grid');
const normal = document.getElementById('normal');
const rainbow = document.getElementById('rainbow');
const erase = document.getElementById('erase');
const color = document.getElementById('color');
const clear = document.getElementById('clear');

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






