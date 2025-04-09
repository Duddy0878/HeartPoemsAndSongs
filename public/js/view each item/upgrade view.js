import { products, getProduct } from "../products.js"
import { formatCurrency } from "../utils/money.js";
import { addUps, getAddUps, getUpgarde, yourUpgrade} from "../addUps.js";
import {view, updateAddUp, saveToStorage} from "./product view.js";



export function viewThePrice(){


    view.forEach((viewItem) => {
    let addUpHTML ='';
    let productPrice = 0;
    let addUpPrice = 0;
    let addUpQuant = 0;
    
                                 
       const product = getProduct(viewItem.productId)
        productPrice = product.price

          
         yourUpgrade.forEach((you) => {
          const upgrade = getAddUps(you.addUpId);
          addUpPrice = upgrade.upgradePrice;
          addUpQuant = you.addUpQuantity
         })   
             
         
         
    
         let total
         
         total = productPrice + addUpPrice * addUpQuant
    addUps.forEach((add) => {  

        addUpHTML +=
        `
        <div class="devide-price js-upgrade" 
              
              data-add-Up-Id="${add.id}"><div>
                  <button class="add-upgrade">-</button>
                  <button class="add-upgrade">+</button>
                  ${add.name}()</div><div>
                  $${formatCurrency(add.upgradePrice)}</div></div>
                    </div>
                `
         const totalHTML = `Total = $${formatCurrency(total)}`   
         
         document.querySelector('.js-total')
           .innerHTML = totalHTML;
              
    })

     
    document.querySelector('.js-view-price')
    .innerHTML = addUpHTML;

    document.querySelectorAll('.js-upgrade')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const {addUpId} = button.dataset;
            updateAddUp(addUpId);
            viewThePrice();
            
            
            
        })
          
      })

    
    })

}

console.log(yourUpgrade);