import {cart} from"./cart.js";

// renderCheckoutHeader();

export function renderCheckoutHeader(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
     cartQuantity +=  cartItem.quantity;

    });


    const 
    checkoutHeaderHTML = `<div class="checkouthedaer">Cart Items (${cartQuantity})</div> `;
  


  document.querySelector('.js-quantity-header')
  .innerHTML = checkoutHeaderHTML


  };


  


  
   

  