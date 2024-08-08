let box =document.getElementsByClassName("box")
let min = 1;
let max = 300;
function getrandomcolor(){
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
let b = Math.floor(Math.random() * (max - min + 1)) + min;
let c = Math.floor(Math.random() * (max - min + 1)) + min;
return `rgb(${a},${b},${c})`


}
Array.from(box).forEach(e=>{
    e.style.backgroundColor=getrandomcolor()
})


