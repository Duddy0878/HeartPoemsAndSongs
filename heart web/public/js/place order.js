import { orders, saveToOrdersStorage } from "./orders.js";
import {cart} from "../js/cart.js";
import {products, fetchProducts} from "../js/products.js";
import { formatCurrency } from "./utils/money.js";
import { deliveryOptions } from "./delivery options.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



fetchProducts()
  .then(() => {

function deliveryOptionsHTML(){

    let  html =''; 
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );

      const priceString = deliveryOption.price === 0
      ? 'Free'
      :  `$${formatCurrency(deliveryOption.price)} - `;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId

      html += `
      <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
            ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString}  Shipping
            </div>
          
          </div>
        </div>
      `
    });
   

    document.querySelector('.js-order-summary')
    .innerHTML = cartSumaryHTML;
  }
creatOrder();
function creatOrder () {

let deliveryId = '1';

 function displayDelivery () {
   

    let  html =''; 
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(
        deliveryOption.deliveryDays,
        'days'
      );
      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      );
  
      const priceString = deliveryOption.price === 0
      ? 'Free'
      :  `$${formatCurrency(deliveryOption.price)} - `;

      const isChecked = deliveryOption.id === deliveryId;
  
      html += ` 
      <div class="options" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio"
        ${isChecked ? 'checked' : ''}>
        <div class="delivery-info">
            <div>${dateString}</div> 
            <div class="delivery-infoSmall">${priceString} Shipping</div>
        </div>
     </div>`
    
  })
  
  document.querySelector('.delivery-options')
    .innerHTML = html;

    chooseDelivery();
  }



function invoice () {
    let invoiceHtml ='';
    let getProduct
    cart.forEach((cartItem) => {
      products.forEach((product) => {
        if(cartItem.productId === product.id){
            getProduct = product
        }
      })


      

   invoiceHtml +=    ` 

    <div class="info">
    <div class="invoice-info">${getProduct.name}</div>
    <div class="invoice-info">$${formatCurrency(getProduct.price)}</div>
    <div class="invoice-info">Standert</div>
    <div class="invoice-info">09/08/07</div> 
    <div class="invoice-info">${cartItem.quantity}</div>
    </div>  
    `
    document.querySelector('.infoList')
      .innerHTML = invoiceHtml

    })
}

invoice();
displayDelivery();









// place order Btn ===================
let placeOrder = document.querySelector('.js-placeOrder')
let orderId = 100;
let orderPlaced
let dateString
let currentOption = '1';

orders.forEach((order) => {
    orderId += 1;
})



function addOrder () {
    let order = cart
    orders.push(
      {
        orderId: orderId,
        status: 'none',
        deliveryOption: currentOption,
        orderItems: order,
        placedAt: orderPlaced,
        deliverAt: dateString
        

    })  
    console.log(order);
     
    saveToOrdersStorage();     
    
}




function times (){
  let placedTime = dayjs();

let placedTimeFormat = placedTime.format('MMMM D YYYY- h:m')

orderPlaced = placedTimeFormat

let deliveryDate
deliveryOptions.forEach((dopt) => {
  if(currentOption === dopt.id){
    deliveryDate = dopt   
  }
})
let deliverTime = placedTime.add(
    deliveryDate.deliveryDays,
  'days'
);


console.log(deliverTime);
 dateString = deliverTime.format(
  'MMMM D YYYY'
);
}



placeOrder.addEventListener('click', () => {
   times();
   addOrder();
   saveToOrdersStorage(); 
})



let thisId = orderId;
let add = '';
let orderTool



function chooseDelivery (){
    document.querySelectorAll('.options')
      .forEach((option) => {
        option.addEventListener('click', () => {
            deliveryId = option.dataset.deliveryOptionId
             displayDelivery();

            //  orders.forEach((order) => {
            //     if(thisId === order.orderId){
            //         add = 'yes';
            //         orderTool = order
            //     }
            //     else{
            //         add = 'no'
                    
            //     }
        
            //  })

            //  if(add === 'no'){
            //     addOrder();
            //  }
            //  else{
            //    orderTool.deliveryOption = deliveryId
            //    saveToOrdersStorage();
            //  }
            //  console.log(orderTool);
             
            currentOption = deliveryId
            console.log(deliveryId);
            
             
           })
      })
}



document.querySelector('.orderId')
 .innerHTML = `${thisId}`

}
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });