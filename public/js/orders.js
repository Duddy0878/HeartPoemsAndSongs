import { customerCart } from "./acount.js";



export let orders =[]

export function fetchOrders(){
     return new Promise((resolve, reject) => {
   const getOrders = new XMLHttpRequest();

   getOrders.onload = () => {
    console.log('loaded');
    if(getOrders.status === 200){
        let json1;
        if(getOrders.responseType === 'json'){
            json1 = getOrders.response;
        }
        else{
            json1 = JSON.parse(getOrders.response);
        }
        
        Object.assign(orders, json1);
        console.log(orders);
        
        resolve(orders);
    }
    else{
        console.error('Error fetching orders:', getOrders.statusText);
        reject('Error fetching orders');
    }
}

    getOrders.open('GET', "../../orders.json");
    getOrders.setRequestHeader('Accept', 'application/json');
    getOrders.responseType = 'json';
    getOrders.send();
    

    
  

});
}                                                                                                     



export function saveToOrdersStorage(newOrders) {
    const postOrders = new XMLHttpRequest();

   postOrders.onload = () => {
    console.log('loaded');
    if(postOrders.status === 200){
        console.log('Orders successfully saved');
    }
    else{
        console.error('Error saving orders:', postOrders.statusText);
    }
   }

   postOrders.open('POST', "../../orders.json");
   postOrders.setRequestHeader('Content-Type', 'application/json');
   postOrders.send(JSON.stringify(newOrders));

}
        
  

export function removeFromOrders (oldId) {
    const newOrders = [];

    orders.forEach((order) => {
        if (`${order.orderId}` !== oldId){
            newOrders.push(order)
        }
    });

    orders = newOrders;

    saveToOrdersStorage();

  }
 
  