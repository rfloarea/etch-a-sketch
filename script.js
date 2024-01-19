const gridFrame = document.getElementById('gridFrame');
const box = document.createElement('div')

// create an iterable array of i length
i = prompt('How many boxes would you like in your canvas? Max is 256.');
let arr = Array.from('x'.repeat(i));
console.log(arr.length);

// append a new box element to the parent container every time we iterate over the array
function appendBox(j) {
    for (j = 0; j < arr.length; j++ ){
        // create a new element per item in array
        const newElement  = document.createElement('div');
        // add the box class to the new element
        newElement.classList.add('box');
        // append the new element to parent element
        gridFrame.appendChild(newElement);
    }
}

appendBox();