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
    console.log(parseInt(document.getElementById("size")));
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
    let fff = sketch.offsetWidth
    let aaa = Math.floor(fff/size)*0.9;
    for(let j=0 ; j<nsquares.length ;j++){
        nsquares[j].style.width = `${aaa}px`;
        nsquares[j].style.height = `${0.6*(100/size)*.8}vw`;
        /**nsquares[j].style.paddingTop = "100%";**/
        nsquares[j].style.flex = `0 1 ${(100/size)*.80}%`;
    }
}
