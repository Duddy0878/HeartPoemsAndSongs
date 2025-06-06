import { orders, saveToOrdersStorage , fetchOrders} from "./orders.js";
import {cart} from "../js/cart.js";
import {products, fetchProducts} from "../js/products.js";
import { formatCurrency } from "./utils/money.js";
import { deliveryOptions } from "./delivery options.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

fetchOrders()
  .then(()=> {

  

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
     
    saveToOrdersStorage(orders);     
    
}

var hghg =`      <table style="width: 100%; border-collapse: collapse">
        <tr style="vertical-align: top">
          <td style="padding: 24px 8px 0 4px; display: inline-block; width: max-content">
            <img style="height: 64px" height="64px" src="{{image_url}}" alt="item" />
          </td>
          <td style="padding: 24px 8px 0 8px; width: 100%">
            <div>{{name}}</div>
            <div style="font-size: 14px; color: #888; padding-top: 4px">QTY: {{units}}</div>
          </td>
          <td style="padding: 24px 4px 0 0; white-space: nowrap">
            <strong>{{price}}</strong>
          </td>
        </tr>
      </table>`


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

let getProduct2
let getCart2
cart.forEach((cartItem) => {
  products.forEach((product) => {
    if(cartItem.productId === product.id){
        getProduct2 = product
    }
  })
})



var templateParams = {
  my_html: hghg,
  email: 'duddystudio@gmail.com',
  website_link: 'https://heartpoemsandsongs.onrender.com'
};




placeOrder.addEventListener('click', () => {
   times();
   addOrder();
   saveToOrdersStorage(orders); 
   emailjs.send('service_okwhtvf', 'template_cyfvyp7', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
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

})
.catch((error) => {
  console.error("Error fetching orders:", error);
});