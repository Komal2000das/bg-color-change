const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','yellow', 'purple','green','blue', 'pink', 'purple']

body.style.backgroundColor = 'violet';

button.addEventListener('click', changeB)

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}
