import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { orders , fetchOrders} from '../orders.js';
import {products, fetchProducts} from '../products.js';

// openSuport


let modalSuport2 = document.querySelector('.modal-suport'),
openSuport2 = document.querySelector('.js-suportBtn'),
// finishAdd = document.querySelector('.add-submit'),
closeSuport2 = document.querySelector('.close-suport');

openSuport2.addEventListener('click',function(){
 modalSuport2.style.display = 'block';
}) 

 window.addEventListener('click',function(e){
  if(e.target == modalSuport2)  {modalSuport2.style.display = 'none';}      
 }) 

 closeSuport2.addEventListener('click',function(){
 modalSuport2.style.display = 'none';
}) 




let today = dayjs();



var x = setInterval(function () {
    const dateString = today.format(
        'dddd, MMMM D'
      );
   const smalldate = today.format('M/D');
    
      let currentDate = new Date();
      let am_pm = currentDate.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
    
      let dateHtml =`` 
      if(window.innerWidth > 500){
      dateHtml = ` &emsp;${dateString} &emsp; &emsp; ${am_pm} `
      }
      else{
      dateHtml = `${smalldate}-${am_pm}`
      }
      document.querySelector('.todayDate')
      .innerHTML = dateHtml
})




// ===========  orders fact
function ordersFact () {
  let countOrders = 0
  orders.forEach((order) => {
    countOrders += 1

    
  });

document.querySelector('.ordersFact')
 .innerHTML = `<a class="popUpTxt" href="../../html/admin/orders history.html"><div>
              ${countOrders} orders
            </div></a>
            <svg class="symble" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M200-640v440h560v-440H640v320l-160-80-160 80v-320H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm184 80v190l80-40 80 40v-190H400Zm-200 0h560-560Z"/></svg>
            <div class="symble2 js-newOrders"></div>`
}

function productsFact () {
  let countProducts = 0;

  products.forEach((product) => {
    countProducts += 1;
  })

  document.querySelector('.productsFact')
   .innerHTML = ` <div>
              ${countProducts} products
            </div>
            <svg class="symble" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>`
}

function emailFacts () {
  document.querySelector('.emailFacts')
   .innerHTML = ` <div>
                6 Emails
              </div>
              <svg class="symble" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>`
}

function totalOrders (){
  let totalOrders = 0;

  
  let newOrders = []

orders.forEach((order) => {
  if(order.status === 'none'){
    newOrders.push(order)
  }


})

newOrders.forEach((newone) => {
  totalOrders += 1
})

if(totalOrders !== 0){
  document.querySelector('.js-newOrders')
  .innerHTML = `<div class="more-text2"></div><a class="popUpTxt" href="../../html/admin/orders data.html">${totalOrders}</a><div class="more-text2"></div>`
}


} 

fetchProducts()
  .then(() => {
    fetchOrders()
     .then(() => {
      ordersFact();
      productsFact();
      emailFacts();
      totalOrders();
  })
  })
  .catch((error) => {
    console.log(error);
  });





  