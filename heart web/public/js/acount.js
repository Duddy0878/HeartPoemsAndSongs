


export let acounts = []

export function fetchCustomers() {
    return new Promise((resolve, reject) => {
     const getCustomers = new XMLHttpRequest();

     getCustomers.onload = () => {
       console.log('loaded');
       if(getCustomers.status === 200) {
         
        let json1;
        if(getCustomers.responseType === 'json'){
            json1 = getCustomers.response;
        }
        else{
            json1 = JSON.parse(getCustomers.response);
        }
         
        Object.assign(acounts, json1);
        console.log(acounts);
        
        resolve(acounts);
    }
    else{
        console.error('Error fetching customers:', getCustomers.statusText);
        
    }
     }

     getCustomers.onerror = () => {
        reject(new error('Error fetching customers'));
     }

     getCustomers.open('GET', "../../customers.json");
     getCustomers.setRequestHeader('Accept', 'application/json');
     getCustomers.responseType = 'json';
     getCustomers.send();
     
})
}
        



export function saveToAcountsStorage(newAcount) {
    const postCustomers = new XMLHttpRequest();

    postCustomers.onload = () => {
        console.log('loaded');
        if(postCustomers.status === 200) {
            console.log('Customers successfully saved');
        }
        else{
            console.error('Error saving customers:', postCustomers.statusText);
        }
        
    
    }

    postCustomers.open('POST', "../../customers.json");
    postCustomers.setRequestHeader('Content-Type', 'application/json');
    postCustomers.send(JSON.stringify(newAcount));


    


} 

  export function getAcount (first, second, eachAcount) {
    acounts.forEach((acount) => {
        if(first === second){
            eachAcount === acount
        }
    })

  }



// =========================================================================================================



export let customerCart = JSON.parse(localStorage.getItem('customerCart'));

export function saveToCustomerCartStorage() {
  localStorage.setItem('customerCart', JSON.stringify(customerCart) );
}

if(!customerCart){
  customerCart = [
    
  ]
}

// == merge acount with user
 
// acounts.forEach((acount) => {
//     var gotit

//     customerCart.forEach((customer) => {
//         if(acount.acountId === customer.customerId){
//           gotit  = customer.customerId
//         }
      
//     })
   
    

//     if(gotit !== acount.acountId){
        
//         customerCart.push({
//             customerId: acount.acountId,
//             cartToGo:{}
//         })
      
//         saveToCustomerCartStorage();
//     }
  
    
 
//   })
  
