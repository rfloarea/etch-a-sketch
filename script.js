const gridFrame = document.getElementById('gridFrame');
const box = document.createElement('div')



// create an iterable array of i length
i = prompt();
let arr = Array.from('x'.repeat(i));
console.log(arr.length);

// append a new box element to the parent container element
function appendBox(j) {
    for (j = 0; j < arr.length; j++ ){
        // checking
        console.log(arr);
        // create a new element per item in array
        const newElement  = document.createElement('div');
        // add the box class to element i
        newElement.classList.add('box');
        // append i to parent element
        gridFrame.appendChild(newElement);
    }
}

appendBox();



// so now we need to figure out how to create i number of box elements and append them i number of times


// i = 3
// let arr = Array.from('x'.repeat(i))
// console.log(arr)
// //logs ['x', 'x', 'x']

// i = 3
// let arr = (Array.from('x'.repeat(i)))
// arr.forEach((element) => console.log(element))
// // x
// // x
// // x

// i = 3
// let arr = Array.from('x'.repeat(i)).forEach((element) => console.log(element))
// // x
// // x
// // x
// // 3

// i = prompt();
// let arr = Array.from('x'.repeat(i)).forEach((element) => console.log(element));
// // input is printed input times

// rather than forEach calling element, why not call a function that inserts a new node?

