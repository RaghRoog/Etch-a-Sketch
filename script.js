let container =  document.querySelector('.canva');
let square = document.createElement('div');
let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;
let colorPicker = document.querySelector('.color-picker');
let colorValue = 'black';
function colorSelection(){
    colorValue = colorPicker.value;
    return colorValue;
}
colorPicker.addEventListener('input', colorSelection);
let mousedown = false;
let body = document.querySelector('body');
body.addEventListener('mousedown', mouseDown)
body.addEventListener('mouseup', mouseUp )
function mouseDown(){
    mousedown = true;
}
function mouseUp(){
    mousedown = false;
}
const defaultSize = 16;
let currentSize = defaultSize;
let sizeButton = document.querySelector('.size-button');
function setCurrentSize(){
    currentSize = prompt('Select size of your canva: ');
    if(currentSize>100||currentSize<=8){
        currentSize = alert("Canva's size can't be lesser than 8 and greater than 100. Size is set to 16.");
        currentSize = 16;
    }
    return currentSize;
}
function containerClean(){
    container.innerHTML = '';
}
function gridReload(){
    containerClean();
    setCurrentSize();
    gridMaker();
}
sizeButton.addEventListener('click', gridReload);

function erasing(){
    colorValue = 'white';
}
let eraser = document.querySelector('.eraser');
eraser.addEventListener('click', erasing); 

let brush = document.querySelector('.brush');
function backToBrush(){
    colorValue = colorPicker.value;
}
brush.addEventListener('click', backToBrush);

function gridMaker(){
for(i=1; i<=currentSize * currentSize; i++){
    let square = document.createElement('div');
    container.appendChild(square);
    square.style.width = containerWidth/currentSize +'px';
    square.style.height = containerHeight/currentSize +'px';;
    square.style.backgroundColor = 'white';
    square.addEventListener('mouseenter', changeColor);
    function changeColor(){
        if (mousedown === true){
        square.style.backgroundColor = colorValue;
        }
    }  
    let cleanCanva = document.querySelector('.clean-canva')
    function cleaningCanva(){
    square.style.backgroundColor = 'white';
}   cleanCanva.addEventListener('click', cleaningCanva);
}
}

let rainbowMode = document.querySelector('.rainbow-mode');
rainbowMode.addEventListener('click', rainbowColor);
function rainbowColor(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);
    colorValue = "rgb(" + R + "," + G + "," + B + ")"
    
}

gridMaker();
