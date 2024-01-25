window.addEventListener('load', startUp);

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click', hideOverlay);
startBtn.addEventListener('click', hideModal);

function startUp() {
    showOverlay();
    startUpModal();
    // drawCanvas();
    // drawBoxes();
    // addEventListeners();
    // setDefaultColor();
  };
  
function startUpModal() {
    showModal();
    // getCanvasSize();
    // getBoxSize();
    // getStartingColor();
    hideModal();
};

function showModal() {
    modal.classList.add('active');
}
function hideModal() {
    modal.classList.remove('active');
}

function showOverlay() {
    overlay.classList.add('active');
}

function hideOverlay() {
    overlay.classList.remove('active');
}

//get canvas size
const canvasSize = document.querySelector('#canvasDropdown').value;
console.log(canvasSize);

function getCanvasSize() {
    switch (canvasSize) {
        case "small":
            canvas.classList.add('sml-Canvas')
            break;
        case "medium":
            canvas.classList.add('med-canvas')
            break;
        case "large":
            canvasSize.classList.add('lrg-canvas')
            break;
    };
};
  


// functioning shit is below  
const canvasFrame = document.getElementById('canvas');
const box = document.createElement('div')
const numberOfBoxes = 256;
const arr = Array.from('x'.repeat(numberOfBoxes));

appendBox();

function appendBox(i) {
for (i = 0; i < arr.length; i++ ){
    const newElement  = document.createElement('div');
    newElement.classList.add('box');
    newElement.setAttribute('id', 'box');
    canvasFrame.appendChild(newElement);
}
}

const newBoxList = document.querySelectorAll('#box');

changeBoxColor();

function changeBoxColor() {
for (let i = 0; i < newBoxList.length; i++) {
    newBoxList[i].addEventListener('click', () => newBoxList[i].style.backgroundColor = 'red');
}
}