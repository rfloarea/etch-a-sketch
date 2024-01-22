const gridFrame = document.getElementById('gridFrame');
const box = document.createElement('div')

numberOfBoxes = prompt('How many boxes would you like in your canvas? Max is 256.');
let arr = Array.from('x'.repeat(numberOfBoxes));

function appendBox(i) {
    for (i = 0; i < arr.length; i++ ){
        const newElement  = document.createElement('div');
        newElement.classList.add('box');
        newElement.setAttribute('id', 'box');
        gridFrame.appendChild(newElement);
    }
}

appendBox();



const newBoxList = document.querySelectorAll('#box');
console.log(newBoxList); // this logs a NodeList of all 256 elements

/* newBox is a NodeList (an array type object) of all elements with id = box
ok...so now what?
now we need to find a way to attach event listeners to each node on this list
is that possible?
let's see
*/

for (let i = 0; i < newBoxList.length; i++) {
    function changeBoxColor(color) {
        newBoxList[i].style.backgroundColor = color;
     }
    newBoxList[i].addEventListener('mouseover', changeBoxColor('red'));
}

/* 
ok, so now every now is red. what does this mean?
this means that we have figured out:
    1. how to iterate over the NodeList 
    2. and change the color as we go
but we lost our nice hover effect...
that we did
*/
