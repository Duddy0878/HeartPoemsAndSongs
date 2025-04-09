
let slideImages = document.querySelectorAll('img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');
var counter = 0;

next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation ='next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation ='next2 0.5s ease-in forwards';
}