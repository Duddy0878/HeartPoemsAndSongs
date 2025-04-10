import {categorys, products, fetchProducts, removeFromProducts, saveToCategorysStorage, saveToProductsStorage,} from"../products.js"
import {formatCurrency} from"../utils/money.js"


fetchProducts()
 .then(() => {

// modal
let productPic = document.getElementById('product-pic');
 let modalAdd = document.querySelector('.modal-backround'),
 openAdd = document.querySelector('.js-openAdd'),
 finishAdd = document.querySelector('.add-submit'),
 cancelAdd = document.getElementById('cancelAdd');

 openAdd.addEventListener('click',function(){
  modalAdd.style.display = 'block';
  productPic.src = '../../items img/default.png'
 }) 
 
//  finishAdd.addEventListener('click',function(){
//   modalAdd.style.display = 'none';
//  }) 

  cancelAdd.addEventListener('click',function(){
  modalAdd.style.display = 'none';
 }) 

//  window.addEventListener('click',function(e){
//   if(e.target == modalAdd)  {modalAdd.style.display = 'none';}      
//  }) 
 
//  modal suport


let modalSuport = document.querySelector('.modal-suport'),
openSuport = document.querySelector('.js-suportBtn'),
// finishAdd = document.querySelector('.add-submit'),
closeSuport = document.querySelector('.close-suport');

openSuport.addEventListener('click',function(){
 modalSuport.style.display = 'block';
}) 

 window.addEventListener('click',function(e){
  if(e.target == modalSuport)  {modalSuport.style.display = 'none';}      
 }) 

 closeSuport.addEventListener('click',function(){
 modalSuport.style.display = 'none';
}) 

// === search

let searchBar = document.querySelector('.show2'),
searchOpen =  document.querySelector('.searchBtn'),
closeSearch1 = document.querySelector('.data-colum');

searchOpen.addEventListener('mouseover', () => {
  searchBar.style.display = 'block';
})

closeSearch1.addEventListener('mouseover',() => {
    searchBar.style.display = 'none';      
 }) 


   
   


// product list
 
 productsList();

 function changeImage() {
  let changePic = document.querySelector('.editImg');
  let inputPic = document.querySelector('.editImgChange');

inputPic.onchange = function getPath(){
  // productPic.src = URL.createObjectURL(inputFile.files[0]);

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem('upload-imgNew', reader.result)
    console.log('hello');
    
    changePic.src = reader.result
  })
  
  
  reader .readAsDataURL(this.files[0]);
       
} 
}     



 
 function productsList() {

  const searchInput = document.querySelector('.searchBar')


  let filterdProducts = []  
 
 
    const  searchString = searchInput.value;
     filterdProducts = products.filter((product) => {
      return(
        product.id.includes(searchString) ||
        product.name.includes(searchString)
      );
    });
    filterdProducts.forEach((filter) => {
     
    })
   

  function totalProducts (){
    let totalProduct = 0;
  products.forEach((product) => {
    
  
    totalProduct += 1;
  })
  
  document.querySelector('.js-data-total')
    .innerHTML = `<div class="more-text2">Total</div> ${totalProduct} <div class="more-text2">Items</div>`
  }

  totalProducts();

  // let productPic = document.getElementById('product-pic');
  let inputFile = document.getElementById('img');

inputFile.onchange = function getPath(){
  // productPic.src = URL.createObjectURL(inputFile.files[0]);

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem('upload-img', reader.result)
    console.log('hello');
    
    productPic.src = reader.result
  })
  
  
  reader .readAsDataURL(this.files[0]);
       
}


  const newTry =  products.sort((a,b) => 
    a.id.localeCompare(b.id)
  
  );



//  ========push data========== //
const form = document.querySelector('form');
const Id = document.getElementById("Id");
const name = document.getElementById("name");
const price= document.getElementById("price");
const img = document.getElementById("img");
const caregory = document.getElementById('selectCategory');
const comment = document.getElementById("comment");
let cateModal = document.querySelector('.modalCate');
let cateForm = document.getElementById('newCate')
let pushCate = document.getElementById('newCategory')


function categorySelect () {
  let categoryHTML = `<option value="none" placeholder="Product Catergory" id="category" class="add">none</option>`;

  categorys.forEach((category) => {
      categoryHTML += `
       <option value="${category}" placeholder="Product Catergory" id="category" class="add">${category}</option>`
  })

  caregory.innerHTML = categoryHTML
}

var addaddCate = document.querySelector('.addCategorys');
var addcloseCate = document.querySelector('.close');

function openAddCategorys (addCate, closeCate) {
  
  
  
  addCate.addEventListener("click", () => {
    cateModal.style.display = 'block'
    console.log('hello');
    
  })

  closeCate.addEventListener('click', () => {
    cateModal.style.display = 'none'
  })
  
}

function addCategorys () {
  

  categorys.push(pushCate.value)

  saveToCategorysStorage(categorys);
}

categorySelect();
openAddCategorys(addaddCate, addcloseCate);




cateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addCategorys();
  categorySelect();
  cateModal.style.display = 'none'
  pushCate.value = '';

})

function updateProducts(){

    products.push({

      id:Id.value,
      image:productPic.src,
      name:name.value,
      price:JSON.parse(price.value),
      Comment:comment.value,
      category:caregory.value,
      sell:'on'
  
 
     
    })
    saveToProductsStorage(products);

}

 function displayList(){
    
 let list1HTML = '';

 
 
 filterdProducts.forEach((product) => {




  let onHTML = `<svg class="removeAdd2"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg>`

  let offHTML = `        <svg class="removeAdd2"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z"/></svg>`
 
  let switchHTML 

  if(product.sell === 'on'){
   switchHTML = offHTML
  }
  else{
     switchHTML = onHTML
  }

    
    

     list1HTML +=`
      <div class="data-each js-${product.id}" >
      <div class="data-each-row">
         ${product.id}     
         </div>
         <div class="data-each-row">
         ${product.name}     
         </div>
             <div class="data-each-row">
         $${formatCurrency(product.price)}   
         </div>
          <div class="data-each-row2 on-btn" data-switch-id="${product.id}">
               ${switchHTML}
         </div>
        <div class="data-each-row2 off-btn" data-switch-id="${product.id}" >

         </div>
         <div class="data-each-row2 editBtn" data-edit-id="${product.id}" id="editBtn">
         <svg class="removeAdd2"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
         </div>
         <div class="data-each-row2">
         <svg class="removeAdd" data-remove-id="${product.id}" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#baa283"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></div>
         </div>
     `;
     
    
    
 }
  

 
 
)
 document.querySelector('.js-data-id')
   .innerHTML = list1HTML
 }

 displayList();

 searchInput.addEventListener('keyup', (e) => {
  const  searchIn = e.target.value.toLowerCase();
  filterdProducts = products.filter((product) => {
    return(
      product.id.toLowerCase().includes(searchIn) ||
      product.name.toLowerCase().includes(searchIn)
    );
  });
   displayList();
   productsList();
   })
      
 

let inputs = document.querySelectorAll('input');
let errorId = document.querySelector('.errorId');
let errorId1 = document.querySelector('.errorId1');
let errorId2 = document.querySelector('.errorId2');
let onlyNumber = (/[0-9]/);

function checkIfEmpty(){
 
      if(Id.value === ''){
        errorId.classList.add("error")
      }

      if(name.value === ''){
        errorId1.classList.add("error")
      }
      else{
        errorId1.classList.remove("error");
      }
    
  }


function checkIdInput(){
  let hi = 0;
  products.forEach((product) => {
    if(Id.value === product.id){
      hi += 1;
    }
   })

      if(hi === 1){
        errorId.classList.add("error");
        errorId.innerHTML = "*Already Product With This Id";
       }
       else{
        errorId.classList.remove("error");
       }
 }
 

function checkPriceInput(){
  if(price.value === ''){
    errorId2.classList.add("error");
  }
  else{
    if(!price.value.match(onlyNumber)){
      errorId2.innerHTML = "* Enter A Numbers Only";
      errorId2.classList.add("error")
    }
    else{
      errorId2.classList.remove("error")
    }
  }
}



form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkIdInput();
  checkIfEmpty();
  checkPriceInput();

  if(!errorId.classList.contains("error") && !errorId1.classList.contains("error") && !errorId2.classList.contains("error")){
    updateProducts();
    
    modalAdd.style.display = 'none';
    errorId.classList.remove('error');
    errorId1.classList.remove('error');
    errorId2.classList.remove('error');
    inputs.forEach(input => input.value = '')
    cateModal.style.display = 'none'
  }
  productsList(); 
  
})

form.addEventListener('reset', (e) => {
  e.preventDefault();
  
  errorId.classList.remove('error');
  errorId1.classList.remove('error');
  errorId2.classList.remove('error');
  productPic.src = '../../items img/default.png'
  cateModal.style.display = 'none'

 inputs.forEach(input => input.value = '')

})


document.querySelectorAll('.removeAdd')
.forEach((link) => {
  link.addEventListener('click',() => {

      const productId = link.dataset.removeId
      removeFromProducts(productId, products);


      const container = 
      document.querySelector(`.js-${productId}`);
      container.remove();
     totalProducts();
     productsList();
     
     
             
  });
});

let modalEdit = document.querySelector('.modal-edit');




let oldPic = document.querySelector('.editImg');
function openEdit() {
  document.querySelectorAll('.editBtn')
  .forEach((EBT) => {
    EBT.addEventListener('click', () => {
      modalEdit.style.display = 'block'

    })
      
  })   
}

   

openEdit();




document.querySelectorAll('.on-btn')
.forEach((button) => {
  button.addEventListener('click', () => {
    let switchId = button.dataset.switchId
    let switchIdAg = 'off' + button.dataset.switchId 
    let SwitchMode
  
    products.forEach((product) => {
      if(product.id === switchId){
        SwitchMode = product
      }
     
      
    })
  
    function checkMode(){
  
      if(SwitchMode.sell === 'on'){
          SwitchMode.sell = 'off';
        
        }
      
      else{
          SwitchMode.sell = 'on';
         
      }
      console.log(SwitchMode.sell);
      
    }
    
    checkMode();
    productsList();
   
    
    saveToProductsStorage(products);
  });
});

var editDisplayCate

function editButton () {

 
  document.querySelectorAll('.editBtn')
    .forEach((edit) => {
      edit.addEventListener('click', () => {
        let editData = edit.dataset.editId
        let editTool
        

        products.forEach((product) => {
          if(product.id === editData){
             editTool = product
          }
          })

          editDisplayCate = editTool.category
       
       function edithtml(){

      
   

        let editHTML =  `
        
          <div >
          <label for="">Product Id</label>
          <input type="text" placeholder="${editTool.id}" id="editId">
          </div>

          <div>
          <label for="">Product Name</label>
          <input type="text" placeholder="${editTool.name}" id="editName">
          </div>

          <div>
          <label for="">Product Price</label>
          <input type="text" placeholder="${editTool.price}" id="editPrice">
          </div>

          <div>
          <label for="">Product Comment</label>
          <input type="text" placeholder="${editTool.Comment}" id="editComment">
          </div>

          <div>
             <div class="modal-add addCategory ">
                  <label for="name"><div class="smallerTxt">Select Product Catergory</div></label>
                  <div class="flex">
                    <select name="" id="editCategory" class="editselectCategory">
                  
                    </select>
                    <div class="editaddCategorys"><svg class="plusCate" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e1cdb2"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>
                    </div>
                  </div>
          </div>

          <div>
          <label for="">Enter New Image</label>
          <input type="file" class="editImgChange" accept="image/jpeg, image/png, image/jpg">
          </div> `
        
        
       let moreEditHTML = ` 
         <div class="editImgCon">
         <div class="editImg-text">Current Image</div>
        <img src="${editTool.image}" class="editImgAg" id="editImgAg">
         </div>
        

      `
 
       
     
      
       
        document.querySelector('.labelInput')
        .innerHTML = editHTML 

        document.querySelector('.moreEditHtml')
        .innerHTML = moreEditHTML
       }   

      
      
       document.getElementById('editId')
       edithtml();

      //  let oldPic = document.querySelector('.editImg');
       let inputNewPic = document.querySelector('.editImgChange');

       var hi = 1;
       var lastHi = hi
     
       inputNewPic.onchange = function getPath(){
      //  productPic.src = URL.createObjectURL(inputFile.files[0]);
     
       const reader = new FileReader();
     
       reader.addEventListener("load", () => {
         localStorage.setItem('upload-imgNew', reader.result)
         hi += 1;
         
         oldPic.src = reader.result
       })
       
       
       
       reader .readAsDataURL(this.files[0]);
            
     }

   
      let editForm = document.querySelector('.editForm');
      let editId =  document.getElementById('editId');
      let editName = document.getElementById('editName');
      let editPrice = document.getElementById('editPrice');
      let editComment = document.getElementById('editComment');
      let editCategory = document.getElementById('editCategory');
      let editImage = document.getElementById('editImage');

      var editAddCate = document.querySelector('.editaddCategorys')
      var editCloseCate = document.querySelector('.close')
      var editCeregory = document.querySelector('.editselectCategory');


      function editCategorySelect () {
     
        let categoryHTML = `
        <option value="" placeholder="Product Catergory" id="category" class="add underLine">${editDisplayCate}</option>
        <option value="none" placeholder="Product Catergory" id="category" class="add">none</option>
        `;
      
        categorys.forEach((category) => {
            categoryHTML += `
             <option value="${category}" placeholder="Product Catergory" id="category" class="add">${category}</option>`
        })
      
        editCeregory.innerHTML = categoryHTML
      }
      editCategorySelect();
      openAddCategorys(editAddCate, editCloseCate);
      
     
        
      function editProducts() {

    

        if(editId.value === ''){
             editTool.id = editTool.id
           }
           else{
             editTool.id = editId.value
           } 
   
           if(editName.value === ''){
             editTool.name = editTool.name
           }
           else{
             editTool.name = editName.value
           } 
   
           if(editPrice.value === ''){
             editTool.price = editTool.price
           }
           else{
             editTool.price = JSON.parse(editPrice.value)
           } 
   
           if(editComment.value === ''){
             editTool.Comment = editTool.Comment
           }
           else{
             editTool.Comment = editComment.value
           } 
   
           if(editCategory.value === ''){
             editTool.category = editTool.category
           }
           else{
             editTool.category = editCategory.value
           } 

          if(hi !== lastHi){
             editTool.image = oldPic.src
          }

          
      
        }
      
       
      
      
      let editInputs = document.querySelectorAll('.editForm input');
      
      
      
       editForm.addEventListener('submit', (e) => {
         e.preventDefault();
       
         
         
          cateModal.style.display = 'none'
          pushCate.value = '';
     
       editProducts();
       
      
       saveToProductsStorage(products);
       location.reload();
       productsList();
       modalEdit.style.display = 'none'
       editInputs.forEach(Einput => Einput.value = '')
       
         
       })


       editForm.addEventListener('reset', (e) => {
        e.preventDefault();
       
       oldPic.src = '../../items img/default.png'
      
       inputs.forEach(input => input.value = '')
       modalEdit.style.display = 'none'
       displayList();
       productsList(); 
      })
      
   })
 })

}



editButton();


 }


}).catch((error) => {
  console.log('error', error);
  
})
 

   


