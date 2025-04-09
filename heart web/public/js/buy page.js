

// item arreys
  import { cart, addToCart} from "./cart.js";
  import { products, fetchProducts, categorys}from "./products.js";
  import { formatCurrency } from "./utils/money.js";
  import {addToView, saveToStorage, updateAddUp} from "./view each item/product view.js";
  import { updateCartQuantity } from "./header.js";
  
  
  // ==========  filterOptions
fetchProducts()
 .then(() => {
  updateCartQuantity();
 buyPage();
 function buyPage () {
  let categoryHTML = `<div class="filterOption all" data-check-id="all">
    
    <div value="all"></div>
    <label for="">all</label>
    </div>`;



  categorys.forEach((category) => {



    categoryHTML += 
    `<div class="filterOption ${category}" data-check-id="${category}">
    
    <div value="${category}"></div>
    <label for="">${category}</label>
    </div>`

  })
  
 
  let getClick = 'all'; 


  document.querySelector('.filter-options')
    .innerHTML = categoryHTML
  
 
  document.querySelectorAll('.filterOption')
    .forEach((filter) => {
      filter.addEventListener('click', () => {

         getClick = filter.dataset.checkId
         

         function checkBox () {
          document.querySelector(`.${getClick}`)
          .classList.add('color')
         }

         buyPage();
         checkBox();
       displayProducts();
        
      
        
      })
      
     
    })

  
  

  let productsHTML = '';
  displayProducts();
  function displayProducts () {

  
      products.forEach((product)=>{
     
          if(product.sell === 'on'){
            productsHTML+=` <div class="item-box js-product-grid js-view ${product.id} display" data-product-id="${product.id}">
                     <a href="../html/itemview.html">
                    <img  class="item-img" src="${product.image}"></a>
                    <div class="item-Description">
                        <div class="">
                          <button class="add-to-button js-add-to-cart" data-product-id="${product.id}">
                            <img class="add-to-cart" js src="../icons/cart.png" alt="">
                          </button>
                          </div>
                        <div class="item-text">
                        <p class="name-text" >${product.name}</p>
                        <p class="comment">${product.Comment} </p>
                        </div>
                    </div> 
                    <p class="price"> $ ${formatCurrency(product.price)}</p>
                  </div>`}
                  else{
                   productsHTML += `
                   <div class="item-box js-product-grid js-view soldOut" data-product-id="${product.id}">
                     <a href="../html/itemview.html">
                    <img  class="item-img" src="${product.image}"></a>
                    <div class="item-Description">
                        <div>
                          <button class="add-to-button js-add-to-cart" data-product-id="${product.id}">
                            <img class="add-to-cart" js src="../icons/cart.png" alt="">
                          </button>
                          </div>
                        <div class="item-text">
                        <p class="name-text" >${product.name}</p>
                        <p class="comment">${product.Comment} </p>
                        </div>
                    </div> 
                    <p class="price"> $ ${formatCurrency(product.price)}</p>
                  </div>`
                  
        }

        let productBox = document.querySelector(`.${product.id}`)
    
     
        
        

        

        // if(getClick === ''){
        //   productBox.classList.add("display")
        // }
       
        
        if(getClick !== 'all'){
          productBox.style.display = 'none';
        }
          if(getClick ===  product.category){
        
            console.log(productBox);
            console.log(getClick);
  
            // productBox.classList.add("display")
            productBox.style.display = 'block';
            
          }
        

           
    
        
     
    
        
      });
    }
  
    
    
      document.querySelector('.js-items-grid').
      innerHTML = productsHTML;
      displayProducts();


 



  // add to cart

  document.querySelectorAll('.js-add-to-cart')
     .forEach((button) => {
        button.addEventListener('click', () => {
          
          const productId = button.dataset.productId;
          addToCart(productId);
          updateCartQuantity();
          console.log(cart);

        });
     });

                         
    

     document.querySelectorAll('.js-view')
       .forEach((grid) => {
        grid.addEventListener('click', () => {
          const productId = grid.dataset.productId;
        
            addToView(productId);
            updateAddUp();
            saveToStorage();
            

           
           
        });
       });


      }
 })
 .catch((error) => {
  console.error('Failed to load maaser:', error);
});
 

  
  
    




       
       

      
       