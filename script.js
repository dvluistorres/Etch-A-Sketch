/** script */

/** The size length in the sketch**/

const sketch = document.querySelector('#sketch')

/**To revome the squares befor creating another */
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

/**To check if the mouse is pressed down or not */
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

/**To select the color */
let col = "black"
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
let randomActive = false

const buttons = document.getElementsByClassName('button');
for (const button of buttons) {
        button.addEventListener('click', function onClick() {
        randomActive = false
        switch (this.id) {
            case "black":
                col = "black";
                console.log(col);
                break;
            case "red":
                col = "red"
                break;
            case "random":
                randomActive = true;
                window.addEventListener('mousemove', function newRandom() {
                    if (randomActive == true) {
                    col = generateRandomColor();
                    }
                })
                break;
            case "erase":
                col = "white"
                break;
        }
    });
  }



/** create divs equal to NxN */
function createSketch (size){
    size = parseInt(document.getElementById("size").value);
    if (size>50) {
        alert("50 is the limit");
    } else {
    const squares = document.getElementsByClassName("square");
    if (squares.length != 0) {
        removeElementsByClass('square');
    }
    for (let i=0 ; i < size**2 ; i++){
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.setAttribute('draggable', 'false');
        sketch.appendChild(square);
    }
    /** to set the size of the inner squares */
    const nsquares = document.getElementsByClassName("square");
    let sketchWidth = sketch.offsetWidth
    let ssize = (sketchWidth/size);
    for(let j=0 ; j<nsquares.length ;j++){
        nsquares[j].style.width = `${(ssize)*0.999}px`;
        nsquares[j].style.height = `${(ssize)*0.999}px`;
        /** To paint if it's clicked*/
        nsquares[j].addEventListener('mouseover', function hopping(event) {
            if(mouseDown>0){
            this.style.backgroundColor = `${col}`;
            }
        });
        nsquares[j].addEventListener('mousedown', function moDown(event) {
            this.style.backgroundColor = `${col}`
        });
        
    }
}}

/** for refreshing the little squares size when the window changes width */
function refresh() {
    const nsquares = document.getElementsByClassName("square");
    let sketchWidth = sketch.offsetWidth;
    size = parseInt(document.getElementById("size").value);
    let ssize = Math.floor(sketchWidth/size);
    for(let j=0 ; j<nsquares.length ;j++){
        nsquares[j].style.width = `${(ssize)*0.999}px`;
        nsquares[j].style.height = `${(ssize)*0.999}px`;
              
    }
}

window.addEventListener('resize', function () {
    
    refresh();
})

