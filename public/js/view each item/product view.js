import { yourUpgrade } from "../addUps.js";
import { products } from "../products.js";
import { formatCurrency } from "../utils/money.js";


// view
export let view = JSON.parse(localStorage.getItem('view'));





if(!view){
    view = [
      ];
    }


// local storage
export function saveToStorage() {
    localStorage.setItem('view', JSON.stringify(view) );
  }

//   add to view to be able to bring back to html

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


export function viewTheItem (){
    
    let viewHTML ='';

    view.forEach((viewItem) =>{
      const  productId = viewItem.productId
      let matchingItem

      products.forEach((pro) =>{
        if(pro.id === productId){
            matchingItem = pro;   
        }



      });

     



      viewHTML += `  <div>
      
          <h1 class="item-name">${matchingItem.name}</h1>
      <img src="${matchingItem.image}" class="item-image">
        <p class="item-comment">${matchingItem.Comment}</p>
        <img src="../icons/5star.png" class="item-rateImage">
      </div>
  </div>`

  
   const priceHTML = `$${formatCurrency(matchingItem.price)}`

   document.querySelector('.js-price')
    .innerHTML = priceHTML;
  
  
    })

    document.querySelector('.js-view-Item')
    .innerHTML = viewHTML;

}




export function getProduct(){


products.forEach((product) =>{
  let productId = product.id
})}

// export function updateAddUp(addUpId) {
//   let matchingAddUp
//   let productId = getProduct()

//   view.forEach((viewItem) => {
    
//     if (productId === view.productId){
//       matchingAddUp = viewItem;
//     }
//   });

//   if(matchingAddUp.addUpId === addUpId){
//     matchingAddUp.addUpQuantity += 1;
//   }
//   else{
//     matchingAddUp.addUpId = addUpId
    
//   }

  

//   saveToStorage();
// }


export function updateAddUp(addUpId) {
  let matchingAddUp

  yourUpgrade.forEach((you) => {
    
    if (addUpId === you.addUpId){
      matchingAddUp = you;
    }
  });

  if(matchingAddUp){
    matchingAddUp.addUpQuantity += 1;
  }
  else{
    yourUpgrade.push({
      addUpId: addUpId,
      addUpQuantity: 1 ,
    })
  }

  
  

  saveToStorage();
}


export function quantHtml (addUpId){


let matchingAddUp

yourUpgrade.forEach((you) => {
  
  if (addUpId === you.addUpId){
    matchingAddUp = you;
  }
});

let quant 
quant = matchingAddUp.addUpQuantity}

 
// }