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

/***************************
 * Create grid with dimension size *
 **************************/
function createGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    document.documentElement.style.setProperty("--columns-row", size);

    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.style.background = '#ffffff';
        document.getElementById('grid').appendChild(div);
    }
}

function setRainbowColor() {
    console.log(color.value);
    let r = color.value.slice(1, 3);
    let g = color.value.slice(3, 5);
    let b = color.value.slice(5, 7);
    let colors = [r, g, b];

    
    colors.forEach( (color, index) => {
        let random = Math.round(Math.random() * (20 - (-20)) + (-20));

        if ((parseInt(color, 16) + random > 255) || (parseInt(color, 16) + random < 0)) {
            colors[index] = parseInt(color, 16) - random;
        } else {
            colors[index] = parseInt(color, 16) + random;
        }
    })

    let hexColor = rgbToHex(colors[0], colors[1], colors[2]);
    color.value = hexColor;
    bgr = hexColor;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

grid.addEventListener('mousedown', function(e) {
    isDrawing = true;
    e.target.style.background = bgr;
})

grid.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        if (mode === 'rainbow') {
            setRainbowColor();
        }
        e.target.style.background = bgr;
    }
})

grid.addEventListener('mouseup', function(e) {
    isDrawing = false;
})

normal.addEventListener('click', () => {
    color.value = '#000000';
    bgr = color.value;
    document.getElementById(mode).classList.toggle('selected');
    normal.classList.toggle('selected');
    mode = 'normal'
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



rainbow.addEventListener('click', () => {
    document.getElementById(mode).classList.toggle('selected');
    rainbow.classList.toggle('selected');
    mode = 'rainbow';
})

createGrid(size.value);






