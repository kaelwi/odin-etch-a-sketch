function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid black';
        document.getElementById('grid').appendChild(div);
    }
}

createGrid();

let mode = 'normal';
let isDrawing = false;

const grid = document.getElementById('grid');

grid.addEventListener('mousedown', function(e) {
    isDrawing = true;
    e.target.style.background = 'black';
})

grid.addEventListener('mousemove', function(e) {
    if (isDrawing) {
        e.target.style.background = 'black';
    }
})

grid.addEventListener('mouseup', function(e) {
    isDrawing = false;
})

