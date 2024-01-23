const canvasFrame = document.getElementById('canvasFrame');
const box = document.createElement('div')

numberOfBoxes = prompt('How many boxes would you like in your canvas? Max is 256.');
let arr = Array.from('x'.repeat(numberOfBoxes));

function appendBox(i) {
    for (i = 0; i < arr.length; i++ ){
        const newElement  = document.createElement('div');
        newElement.classList.add('box');
        newElement.setAttribute('id', 'box');
        canvasFrame.appendChild(newElement);
    }
}

appendBox();

const newBoxList = document.querySelectorAll('#box');

changeBoxColor();


function changeBoxColor() {
    for (let i = 0; i < newBoxList.length; i++) {
        newBoxList[i].addEventListener('click', () => newBoxList[i].style.backgroundColor = 'red');
    }
 }