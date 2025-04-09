import { products, } from "./products.js";
import { formatCurrency } from "./utils/money.js";
import { addUps,} from "./addUps.js";
import {cart, updateAddUp} from "./cart.js"


 export let view = JSON.parse(localStorage.getItem('view'));

 

if(!view){
view = [
    
];
}




export function saveToStorage() {
    localStorage.setItem('view', JSON.stringify(view) );
  }

  function getGet(){
    cart.forEach((cartItem) => {
      const cartId = cartItem.productId
           let matchingcart
          
    
           products.forEach((product) =>{
            if(product.id === cartId){
                matchingcart = product;  } });
            
    
              });
  }



export function addToView(productId){
     let matchingItem

   
    
     view.forEach((viewItem) => {
        if (productId === viewItem.productId){
          matchingItem = viewItem;
        }
      });   
  
      if (matchingItem) {
        
      }
  
      else{
        view.push({
          productId:productId,
          
        });
   
      }

      saveToStorage();
}





  

  export function viewView() {
    let viewHTML ='';
    let totalBefore = 0;
    
    let total = 0;

    
    
   

   

      
      

    //   view.forEach((viewItem) => {

    //     const productId = viewItem.productId;
        
    //     let matchingItem;

    //     products.forEach((product) =>{
    //         if(product.id === productId){
    //             matchingItem = product;
    //             totalBefore += product.price;   
               
    //         }

    //     });

      
        
    //    total += totalBefore
       
         
    //     viewHTML += `  <div>
          
            
    //         <div class=" item-view-price">
    //             <div class="price-header devide-price"><div class="left-side-header">price</div>
    //                 <div class="right-side-header">$${formatCurrency(matchingItem.price)}</div></div>
    //             <div >
    //                 ${addUpHtml()}
              
    //             </div>
    //             <div class="total">Total = $${formatCurrency(total)}</div>
                
    //            </div>
    //              <div class="b-add"><button class="b-add-cart">Add to cart</button></div>`;

   
    // function addUpHtml(){

    //   let addUpHTML ='';
    //         addUps.forEach((add) => {
    //           let matchingcart = getGet();
    //           let matchingId
    //           if(add.id === add.id){
    //             matchingId = add
    //           }

    //           addUpHTML += 
    //           `<div class="devide-price js-upgrade" 
    //           data-product=Id="${matchingcart.id}"
    //           data-add-Up-Id="${matchingId.id}"><div>
    //               <button class="add-upgrade">-</button>
    //               <button class="add-upgrade">+</button>
    //               ${matchingId.name}</div><div>
    //               $${formatCurrency(matchingId.upgradePrice)}</div></div>`

                  
                
                  
    //          });
    //          return addUpHTML;
    //       }

    //     })
            
           
   

    document.querySelector('.js-view-Item')
      .innerHTML = viewHTML;

      
     

      document.querySelectorAll('.js-upgrade') 
      .forEach((add) => {
        add.addEventListener('click', () => {
          const {productId, addUpId} = add.dataset;
          updateAddUp(productId, addUpId);
            console.log(cart);
             
               
               
               
          
              }); });
           
           
  }

  function cheker() {
    var result = confirm('this feuter is not availeble now \n contact us for requires');
    if(result == false){
      event.preventDefault();
    }
  }

  console.log(cart);
  



  



  







