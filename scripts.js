const container = document.querySelector('.hetch');


function createDiv() {
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.style.border = '0.5px solid black';
    square.style.height = '31px';
    square.style.width = '31px';
    square.classList.add('square');
    container.appendChild(square);
}
}
createDiv();

function hoverChange(){
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    })
}

hoverChange();


function refreshPage(){
    const refreshButton = document.querySelector('#refresh');
    refreshButton.addEventListener('click', () => {
        location.reload();
    })
}

refreshPage();

function deleteCurrent() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        container.removeChild(square);
    })
}

//fonctions qui cree les grids

function click32() {
    const moyenButton = document.querySelector('#moyen');
    moyenButton.addEventListener('click', () => {
        deleteCurrent();
        for (let i = 0; i < 1024; i++) {
            let square = document.createElement('div');
            square.style.border = '0.5px solid black';
            square.style.height = '15px';
            square.style.width = '15px';
            square.classList.add('square');
            container.appendChild(square);
           
        }
        hoverChange();
    })
}

function click64() {
    const artisteButton = document.querySelector('#artiste');
    artisteButton.addEventListener('click', () => {
        deleteCurrent();
        for (let i = 0; i < 4096; i++) {
            let square = document.createElement('div');
            square.style.border = '0.5px solid black';
            square.style.height = '7px';
            square.style.width = '7px';
            square.classList.add('square');
            container.appendChild(square);
           
        }
        hoverChange();
    })
}

click32();
click64();

