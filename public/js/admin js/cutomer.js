import { acounts, fetchCustomers } from "../acount.js";


var namesHTML = '';
var eachNameHtml ='';


function displayCustomers (CustomerList) {
   acounts.forEach((acount) => {
    namesHTML += ` <div class="ceacheName" data-acount-check="${acount.acountId}">
            <div class="cname">${acount.userName} </div>
             <div class="cname">/</div>
            <div class="cemail">${acount.email}</div>
        </div>`;

 

   
   })
   CustomerList.innerHTML = namesHTML
 
}


function displayEach () {
   var everyCustomer = document.querySelectorAll('.ceacheName');
   var matchCustomer;
   var getClick;
   console.log(everyCustomer);
   
   everyCustomer.forEach((customer) => {
    customer.addEventListener('click', () => {
        getClick = customer.dataset.acountCheck
        
        acounts.forEach((acount) => {
            if(acount.acountId === getClick) {
                matchCustomer = acount 
            }
           })    
        
        var eachCList = document.getElementById('displayOpenPage')
        
                eachNameHtml = eachNameHtml + ` 
                <div class="open-cpage">
                <div>
                    <div class="openHeader">
                        <div class="name">
                    ${matchCustomer.userName}  <br>
                            <div class="email"> ${matchCustomer.email}</div>
                        </div>
                    </div>
                </div>
                </div>`
        
                eachCList.innerHTML = eachNameHtml
    })
    
    
   })



     
}


var mainCList = document.getElementById('jsCustomers');

fetchCustomers()
  .then(() => {

displayCustomers(mainCList);
displayEach();
  })
  .catch((error) => {
    console.error('Error fetching customers:', error);
  })
    





