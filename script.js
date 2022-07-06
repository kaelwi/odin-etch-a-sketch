function createGrid() {
    for (let i = 0; i < 16*16; i++) {
        let div = document.createElement('div');
        div.style.border = '1px solid black';
        document.getElementById('grid').appendChild(div);
    }
}

createGrid();