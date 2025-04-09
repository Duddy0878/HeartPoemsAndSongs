import { orders, saveToOrdersStorage, fetchOrders} from "../orders.js";
import {formatCurrency} from"../utils/money.js";
import { deliveryOptions, getDeliveryOption } from "../delivery options.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



let searchBar = document.querySelector('.show2'),
searchOpen =  document.querySelector('.searchBtn'),
closeSearch1 = document.querySelector('.data-colum');

searchOpen.addEventListener('mouseover', () => {
  searchBar.style.display = 'block';
})

closeSearch1.addEventListener('mouseover',() => {
    searchBar.style.display = 'none';      
 }) 


 


 function totalOrders (){
  let totalOrders = 0;

  let completeOrders = []
orders.forEach((order) => {
  if(order.status === 'complete'){
    completeOrders.push(order)
  }
})

completeOrders.forEach((completed) => {
  totalOrders += 1
})

document.querySelector('.js-data-total')
  .innerHTML = `<div class="more-text2">complete</div>${totalOrders}<div class="more-text2">Orders</div>`
} 

function orderList (){
displayOrders();


function displayOrders () {
  totalOrders();
  let ordersHtml = '';
  let switchHTML = '';
  orders.forEach((order) => {

    if(order.status === 'complete' || order.status === 'cancel'){

    

    let beforeHTML = `<svg class="removeAdd2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="m691-150 139-138-42-42-97 95-39-39-42 43 81 81ZM240-600h480v-80H240v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-80v-680q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86l-6 6-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h203q3-21 9-41t15-39H240v80Zm0-160h284q38-37 88.5-58.5T720-520H240v80Zm-40 242v-562 562Z"/></svg>
    `

    let shipingHTML = ` <svg class="removeAdd2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M280-160q-50 0-85-35t-35-85H60l18-80h113q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h167l84-360H182l4-17q6-28 27.5-45.5T264-800h456l-37 160h117l120 160-40 200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm357-280h193l4-21-74-99h-95l-28 120Zm-19-273 2-7-84 360 2-7 34-146 46-200ZM20-427l20-80h220l-20 80H20Zm80-146 20-80h260l-20 80H100Zm180 333q17 0 28.5-11.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240Zm400 0q17 0 28.5-11.5T720-280q0-17-11.5-28.5T680-320q-17 0-28.5 11.5T640-280q0 17 11.5 28.5T680-240Z"/></svg>`

    let finnishHTML = ` <svg class="removeAdd2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/></svg>`

    let cancelHtml = `<svg class="removeAdd2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
   
   if(order.status === 'none'){
     switchHTML = beforeHTML
   } 
   else if(order.status === 'shiping'){
    switchHTML = shipingHTML
   }
   else if(order.status === 'complete'){
    switchHTML = finnishHTML
   }

   else if(order.status === 'cancel'){
    switchHTML = cancelHtml
   }
    


    
let productInfo = order.orderItems
let moreProductInfo 
let productInfoHtml ='';
 productInfo.forEach((info) => {
  moreProductInfo = info
  productInfoHtml += moreProductInfo.productId +'-' + moreProductInfo.quantity + '-' + moreProductInfo.addUpId + '/'
})
console.log(moreProductInfo.productId);





   

ordersHtml += `
         <div class="data-each js-${order.orderId}" >
      <div class="data-each-row">
         ${order.orderId}     
         </div>
         <div class="data-each-row js-product-info-">
             ${productInfoHtml}
         </div>
          <div class="data-each-row">
            ${order.deliverAt}
         </div>
          <div class="data-each-row2 ship-btn" data-switch-id="${order.orderId}">
           ${switchHTML}
         </div>
        <div class="data-each-row2 off-btn" data-switch-id="${order.orderId}" >
               
         </div>
         <div class="data-each-row2 editBtn" data-edit-id="${order.orderId}" id="editBtn">
         <svg class="removeAdd2"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#baa283"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
         </div>
         <div class="data-each-row2">
         <svg class="removeAdd" data-remove-id="${order.orderId}" xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#baa283"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></div>
         </div>
      `
     
    
   }
      
  })
 


  
 

  document.querySelector('.js-order-id')
    .innerHTML = ordersHtml
  
    
    

  }

  document.querySelectorAll('.ship-btn')
      .forEach((btn) => {
        btn.addEventListener ('click', () => {
          let switchStatus = btn.dataset.switchId
          let matchStat 
          
          
        orders.forEach((order) => {
        //  if(switchStatus === order.orderId){
           
           
        // }
           
          if (switchStatus === `${order.orderId}`){
            matchStat = order
          }
           
          })
      
           
          
          function checksts () {
           if(matchStat.status === 'none'){
              matchStat.status = 'shiping'
              alert('Are you sure This will change the status of product and effect inqieries')
           }
           else if(matchStat.status === 'shiping'){
            matchStat.status ='complete'
            alert('Are you sure This will change the status of product and effect inqieries'
            )
           }
        
           
           
          }
   
          checksts();
          orderList();
          saveToOrdersStorage(orders);
        });

      })

      let modalEdit = document.querySelector('.modal-edit')
      document.querySelectorAll('.editBtn')
        .forEach((btn) => {
          btn.addEventListener('click', () => {
            let editData = btn.dataset.editId
            modalEdit.style.display = 'block'
    
            let matcEdit
    
            orders.forEach((order) => {
              if(editData === `${order.orderId}`){
                matcEdit = order
              }
            })
            
    
            function orderEdit () {
             let stat1 = 'none'
             let stat2 = 'shiping'
             let stat3 = 'cancel'
             if(matcEdit.status === 'cancel'){
              stat3 = 'complete'
             }
    
          
    
             let dOpt1 = '2'
             let dOpt2 = '3'
    
             if(matcEdit.deliveryOption === '2'){
              dOpt1 = '1'
             }
    
             else if(matcEdit.deliveryOption === '3'){
              dOpt1 = '1'
              dOpt2 = '2'
             }
     
              let editHTML =  `
                    
                        <div >
                        <label for="">Order Id</label>
                        <input type="text" placeholder="${matcEdit.orderId}" id="editId">
                        </div>
              
                        <div>
                        <label for="">Delivery Date</label>
                        <input type="text" placeholder="${matcEdit.deliverAt}" id="editDate">
                        </div>
              
                        <div>
                      <label for="">Status</label>
                       <select name="" id="editStatus">
                       <option value="${matcEdit.status}">${matcEdit.status}</option>
                       <option value="${stat1}">${stat1}</option>
                       <option value="${stat2}">${stat2}</option>
                       <option value="${stat3}">${stat3}</option>
                       </select>  
                        </div>
    
                            <div>
                        <label for="">Delivery option</label>
                       <select name="" id="editOption">
                       <option value="${matcEdit.deliveryOption}">${matcEdit.deliveryOption}</option>
                       <option value="${dOpt1}">${dOpt1}</option>
                       <option value="${dOpt2}">${dOpt2}</option>
                       </select>  
                        </div>
              
                    
              
                        `
                      
                      
              document.querySelector('.labelInput')
                      .innerHTML = editHTML 
            }
            orderEdit();
    
    
            
       
          let editForm = document.querySelector('.editForm');
          let editId =  document.getElementById('editId');
          let editDate = document.getElementById('editDate');
          let editStatus = document.getElementById('editStatus');
          let editOption = document.getElementById('editOption');
        
          
         
            
          function editProducts() {
    
        
    
            if(editId.value === ''){
                 matcEdit.orderId = matcEdit.orderId
               }
               else{
                 matcEdit.orderId = editId.value
               } 
       
               if(editDate.value === ''){
                matcEdit.deliverAt = matcEdit.deliverAt
               }
               else{
                 matcEdit.deliverAt = editDate.value
               } 
    
               if(editStatus.value === ''){
                matcEdit.status = matcEdit.status
               }
               else{
                 matcEdit.status = editStatus.value
               } 
       
               if(editOption.value === ''){
                 matcEdit.deliveryOption = matcEdit.deliveryOption
               }
               else{
                matcEdit.deliveryOption = editOption.value
               } 
       
    
              
          
            }
            let editInputs = document.querySelectorAll('.editForm input');
    
            editForm.addEventListener('submit', (e) => {
              e.preventDefault();
              editProducts();
              displayOrders();
              saveToOrdersStorage(orders);
              location.reload();
              modalEdit.style.display = 'none'
              editInputs.forEach(Einput => Einput.value = '')
            })
    
            editForm.addEventListener('reset', (e) => {
              e.preventDefault();
      
              displayOrders();
           
              location.reload();
              modalEdit.style.display = 'none'
              editInputs.forEach(Einput => Einput.value = '')
            })
    
    
    
          
           
    
          })
          
        })
    

}

fetchOrders()
 .then(() => {
  
  totalOrders();
orderList();

 })
 .catch((error) => {
  console.log('error', error);
 });


console.log('hi');










   


