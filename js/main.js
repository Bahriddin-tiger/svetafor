
const elRed = document.querySelector('.js-red') 
const elYellow = document.querySelector('.js-yellow') 
const elGrean = document.querySelector('.js-grean') 

let red =  setInterval(() => {
   elRed.style.backgroundColor = "red"
},1000);
let yellow =  setInterval(() => {
 elYellow.style.backgroundColor = "yellow"
},5000);
let green =  setInterval(() => {
elGrean.style.backgroundColor = "green"
},7000);

setTimeout(()=>{
    clearInterval(red) 
    elRed.style.backgroundColor = "white"
},5000)
setTimeout(()=>{
    clearInterval(yellow)
    elYellow.style.backgroundColor = "white"
},7000)

