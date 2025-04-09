
// slide product-card

let slideImageBtn = document.querySelectorAll('.product-card')
let nextBtn = document.querySelector('.nextBtn')
let preBtn = document.querySelector('.preBtn')

var counterBtn = 0;

nextBtn.addEventListener('click', slideNextBtn)

   function slideNextBtn(){
      slideImageBtn[counterBtn].style.animation = 'nextBtn1 0.5s ease-in forwards';
      if(counterBtn >= slideImageBtn.length-1){
          counterBtn = 0;
      }
      else{
          counterBtn++;
      }
      slideImageBtn[counterBtn].style.animation = 'nextBtn2 0.5s ease-in forwards';
      
    }
   
    preBtn.addEventListener('click', slidePreBtn)
    
    function slidePreBtn(){
      slideImageBtn[counterBtn].style.animation = 'preBtn1 0.5s ease-in forwards';
      if(counterBtn == 0){
          counterBtn = slideImageBtn.length-1;
      }
      else{
          counterBtn--;
      }
      slideImageBtn[counterBtn].style.animation = 'preBtn2 0.5s ease-in forwards';
    }


// slide display
let slideImage = document.querySelectorAll('.slides img')
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

   const stopSlide = document.querySelector('.slide-wrapper');
      stopSlide.addEventListener('mouseover', function(){
          clearInterval(deletInterval);
      });

      stopSlide.addEventListener('mouseout', autoSlide);


        window.addEventListener('unload', function() {
   
  });

  var countDownDate =  new Date("March 13, 2025 00:00:00").getTime();
  var x = setInterval(function (){
    var now = new Date().getTime();
    var distance = countDownDate - now ;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("seconds").innerHTML = seconds;

  } ,1000);