/** script */

/** The size length in the sketch**/

const sketch = document.querySelector('#sketch')

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function createSketch (size){
    size = parseInt(document.getElementById("size").value);
    const squares = document.getElementsByClassName("square");
    if (squares.length != 0) {
        removeElementsByClass('square');
    }
    for (let i=0 ; i < size**2 ; i++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        sketch.appendChild(square);
    }
    const nsquares = document.getElementsByClassName("square");
    let sketchWidth = sketch.offsetWidth
    let ssize = Math.floor(sketchWidth/size);
    for(let j=0 ; j<nsquares.length ;j++){
        nsquares[j].style.width = `${Math.floor(ssize)-3}px`;
        nsquares[j].style.height = `${Math.floor(ssize)-3}px`;
    }
}

function refresh() {
    const nsquares = document.getElementsByClassName("square");
    let sketchWidth = sketch.offsetWidth;
    size = parseInt(document.getElementById("size").value);
    let ssize = Math.floor(sketchWidth/size);
    for(let j=0 ; j<nsquares.length ;j++){
        nsquares[j].style.width = `${Math.floor(ssize)-3}px`;
        nsquares[j].style.height = `${Math.floor(ssize)-3}px`;
    }
}

window.addEventListener('resize', function () {
    refresh();
})