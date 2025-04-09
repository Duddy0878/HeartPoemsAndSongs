import {renderOrderSummary} from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/payment summary.js";
import { renderCheckoutHeader } from "./renderHeaderQuantity.js";
import { paymentCheckoutHeader} from "./checkout/payment summary.js";
import { fetchProducts } from "./products.js";
import { updateCartQuantity } from "./header.js";



fetchProducts()
  .then(() => {

updateCartQuantity();
renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
paymentCheckoutHeader(); 
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
  


