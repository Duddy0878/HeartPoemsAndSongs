import { cart, saveToStorage } from "./cart.js"
import { acounts, saveToAcountsStorage, customerCart, saveToCustomerCartStorage, fetchCustomers } from "./acount.js";






document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    if(!isDropdownButton && e.target.closest('[data-dropdown') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown')
        currentDropdown.classList.toggle('active')

    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if(dropdown === currentDropdown) return
    dropdown.classList.remove('active')
    })
})

// function showSidebar(){
//     const sidebar = document.querySelector('.side-bar')
//     sidebar.style.display ='flex'
// }

let sidebar = document.querySelector('.side-bar'),

 openSidebar = document.querySelector('.open-sidebar'),
 closeSidebar = document.querySelector('.close-sidebar')

openSidebar.addEventListener('mouseover', function(){
   sidebar.style.display = 'flex' ;
})


closeSidebar.addEventListener('mouseover',function(){
    sidebar.style.display = 'none';
   })  


   
window.addEventListener('click',function(e){
if(e.target == sidebar)  {sidebar.style.display = 'none';}      
}) 

let page = document.querySelector('.main')

page.addEventListener('mouseover' ,function(e){
sidebar.style.display = 'none';  
}) 

export let currentUser = JSON.parse(sessionStorage.getItem('user'))




export function saveUserStorage() {
    sessionStorage.setItem('user', JSON.stringify(currentUser));
   }

// === modal acount

function displayAcounts(){
    
let modalAcount = document.querySelector('.acount');
let acountOpen = document.querySelector('.acount-icon');
let acountClose = document.querySelector('.formx');

acountOpen.addEventListener('click', () => {
    modalAcount.style.display = 'block'
})

acountClose.addEventListener('click', () => {
    modalAcount.style.display = 'none'
})


let formIn = document.querySelector('.formAcount')
let emailIn = document.getElementById('emailIn');
let passwordIn = document.getElementById('passwordIn');
 
let toLogIn = document.querySelector('.toLogIn');
let toSignUp = document.querySelector('.toSignUp')
let formLogin = document.querySelector('.formAcount6');
let nameLog = document.getElementById('nameLog')
let passwordLog = document.getElementById('passwordLog')
let emailLog = document.getElementById('emailLog')

// === sign in

window.addEventListener('beforeunload', () => {
    
   
    
})

formIn.addEventListener('submit', (e) => {
    e.preventDefault();
   
    let acountInfo

    if(emailIn.value === 'admin@gmail.com' && passwordIn.value === 'Werz0878'){
      window.open("../html/admin/admin boared.html", "_blank")
      document.querySelector('.checkout-header')
      .style.display = 'flex'
     updateCartQuantity();
    emailIn.value = '';
    passwordIn.value = '';
    modalAcount.style.display = 'none'
    
      
    }
    else{
    
    acounts.forEach((acount ) => {
        if(acount.email == emailIn.value && acount.password == passwordIn.value){
           acountInfo = acount
        }
   
    })
    if(acountInfo != null){
    sessionStorage.setItem('user', JSON.stringify(acountInfo.acountId));

    Swal.fire({
      title: `Hi ${acountInfo.userName}`,
      icon: "success",
      showConfirmButton: false,
      timer: 1800,
      color: "#c2a579",
      background: '#fdf8ea'
    })

    document.querySelector('.checkout-header')
    .style.display = 'flex'
 
    emailIn.value = '';
    passwordIn.value = '';
    modalAcount.style.display = 'none'
    
    
    updateCartQuantity();
    location.reload()
    displayName()
    }
    else{
        Swal.fire({
            title: "Wrong email or password",
            icon: "error",
            showConfirmButton: false,
            timer: 1800,
            color: "#c2a579",
            background: '#fdf8ea'
          })
    }
    
    }
    })


// ========== sign up

toLogIn.addEventListener('click', (e) => {
    e.preventDefault()
    formLogin.style.display = 'grid'
    formIn.style.display = 'none'

});

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(nameLog);
    
   acounts.push({
    acountId: crypto.randomUUID(),
    userName: nameLog.value,
    email: emailLog.value,
    password: passwordLog.value,

   })
    
    saveToAcountsStorage(acounts);
    
})

toSignUp.addEventListener('click', (e) => {
  e.preventDefault()
  formLogin.style.display = 'none'
  formIn.style.display = 'grid'

});

}

function displayName(){
    if(currentUser != null){
    var getName

    for(let i = 0; i < acounts.length; i++){
      if(currentUser === acounts[i].acountId){
       getName = acounts[i].userName
      }
      
   }
   var toDispaly = document.querySelector('.dacount')

    toDispaly.innerHTML =  `
    <img src="../design/acont.png" class="acount-icon"></img>
    <div style="margin-left: 6px;  color: #c2a579">${getName}</div>
    `
}

}




export function updateCartQuantity(){
   

    
    let cartQuantity = 0;
 
     cart.forEach((cartItem) => {
      cartQuantity +=  cartItem.quantity;
 
     });
 
     const 
     checkoutHeaderHTML = `${cartQuantity} `;
 
   document.querySelector('.js-cart-quantity')
   .innerHTML = checkoutHeaderHTML;
    } 
 
    
  fetchCustomers()
      .then(() => {
        displayAcounts()
        displayName()
      })
      .catch((error) => {
        console.log(error)
      })
    
   























