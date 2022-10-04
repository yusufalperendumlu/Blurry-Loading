const load = document.querySelector(".loading");
const images = document.querySelector(".img");

let int = setInterval(blurring , 20 );
let wait = 0;

function blurring() {
    wait++;

    load.innerText= `${wait}%` ; 

    load.style.opacity= scale(wait,0,100,1,0);
    images.style.filter = `blur(${scale(wait,0,100,50,0)}px)`;
} 

const scale = (num , in_min , in_max , out_min , out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};