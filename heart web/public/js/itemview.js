import { viewTheItem } from "./view each item/product view.js";
import { viewThePrice } from "./view each item/upgrade view.js";

viewTheItem();
viewThePrice();









// const handleBeforeUnload = (event) => { localStorage.removeItem("fromData");}


let slideImage = document.querySelectorAll('.board img')
let next = document.querySelector('.next')
let pre = document.querySelector('.pre')                             

var counter = 0;

next.addEventListener('click', slideNext)

   function slideNext(){
      slideImage[counter].style.animation = 'next1 0.5s ease-in forwards';
      if(counter >= slideImage.length-1){
          counter = 0;
      }
      else{
          counter++;
      }
      slideImage[counter].style.animation = 'next2 0.5s ease-in forwards';
      
    }
   
    pre.addEventListener('click', slidePre)
    function slidePre(){
      slideImage[counter].style.animation = 'pre1 0.5s ease-in forwards';
      if(counter == 0){
          counter = slideImage.length-1;
      }
      else{
          counter--;
      }
      slideImage[counter].style.animation = 'pre2 0.5s ease-in forwards';
    }

    // auto slide
    let deletInterval

    function autoSlide(){
      deletInterval = setInterval(timer, 2500)
      function timer(){
          slideNext();
          
      }
   }
   autoSlide();

   const stopSlide = document.querySelector('.upgrade-sample-boared');
      stopSlide.addEventListener('mouseover', function(){
          clearInterval(deletInterval);
      });

      stopSlide.addEventListener('mouseout', autoSlide);


        window.addEventListener('unload', function() {
    localStorage.removeItem('view');
  });