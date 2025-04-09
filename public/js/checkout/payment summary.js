import { cart } from "../cart.js";
import { getProduct, products} from "../products.js";
import { deliveryOptions, getDeliveryOption } from "../delivery options.js";
import { formatCurrency } from "../utils/money.js";
import { orders,saveToOrdersStorage } from "../orders.js";



export function renderPaymentSummary(){


     
    
            
    let productPrice = 0;
    let shipingPrice = 0;

    cart.forEach((cartItem) => {                               
        // items = cost
        const product = getProduct(cartItem.productId);
        productPrice += product.price * cartItem.quantity;

        // shiping = cost

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shipingPrice += deliveryOption.price;

    });

   const totalBeforeTaxCents = productPrice + shipingPrice;
   const taxCents = totalBeforeTaxCents * 0.1;
   const totalCents = totalBeforeTaxCents + taxCents;

   const paymentSummaryHTML = `       
              <div class="payment-summary-title">
                  Order Summary
                </div>
      
                <div class="payment-summary-row">
                   <div class="js-payment-item-quantity"> </div> 
                  <div class="payment-summary-money">
                  $${formatCurrency(productPrice)}</div>
                </div>
      
                <div class="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div class="payment-summary-money">
                  $${formatCurrency(shipingPrice)}</div>
                </div>
      
                <div class="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div class="payment-summary-money">
                  $${formatCurrency(totalBeforeTaxCents)}</div>
                </div>
      
                <div class="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
                </div>
      
                <div class="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
                </div>
      
                <a href="place order.html"><button class="place-order-button button-primary">
                  Proceed To Checkout
                </button></a>
   `;
   
    
    document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
    

      

  }







 export function paymentCheckoutHeader(){
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
   cartQuantity +=  cartItem.quantity;

  });


  const 
  checkoutPaymentHTML = `Items (${cartQuantity})`;



document.querySelector('.js-payment-item-quantity')
.innerHTML = checkoutPaymentHTML


};




