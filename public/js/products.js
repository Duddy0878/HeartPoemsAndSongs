
export let products = []
export let categorys = []

export function fetchProducts() {
  return new Promise((resolve, reject) => {

    
    
    const productsRequest = new XMLHttpRequest();

    productsRequest.onload = () => {
      console.log('request loadder');
      

      if(productsRequest.status === 200) {
        let json ;
        console.log(productsRequest.status);
        
        if(productsRequest.responseType === 'json')
        json = productsRequest.response;
      else{
        json = JSON.parse(productsRequest.response);

      }
      products = json;
      resolve();
      }
      else{
        console.error('Error loading products:', productsRequest.statusText);
        reject(new Error('Error loading products'));
      }
    }

    productsRequest.open('GET', '../../products.json');
    productsRequest.setRequestHeader('Accept', ' application/json');
    productsRequest.responseType = 'json';
    productsRequest.send();
  
  });
}
                                                         

   export function saveToProductsStorage(newProducts) {
   const postProducts = new XMLHttpRequest();

   postProducts.onload = () => {
    if(postProducts.status === 200) {
      console.log('Products saved successfully!');
    }
    else{
      console.error('Error saving products:', postProducts.statusText);
    }
  }

  postProducts.open('POST', '../../products.json');
  postProducts.setRequestHeader('Content-Type', 'application/json');
  postProducts.send(JSON.stringify(newProducts));

}


  export function getProduct (productId) {
 
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;          
        }
                                
    });

    return matchingProduct;                          
   
   }

   export function removeFromProducts (productId) {
    const newProducts = [];

    products.forEach((product) => {
        if (product.id !== productId){
            newProducts.push(product)
        }
    });

    products = newProducts;

    saveToProductsStorage(products);

  }




  const categorysRequest = new XMLHttpRequest();

  categorysRequest.onload = () => {
    console.log('request loadder');
    
    
    if(categorysRequest.status === 200) {
     let json2 ;
     if(categorysRequest.responseType === 'json'){
      json2 = categorysRequest.response;
     }
     else{
       json2 = JSON.parse(categorysRequest.response);

     }
     categorys = json2;
    }
    else{
      console.error('Error loading categorys:', categorysRequest.statusText);
    }

  }

  categorysRequest.open('GET', '../../categorys.json');
  categorysRequest.setRequestHeader('Accept', ' application/json');
  categorysRequest.responseType = 'json';
  categorysRequest.send();

  
     
   
   
 

   export function saveToCategorysStorage(newCategorys) {
    const postCategorys = new XMLHttpRequest();

    postCategorys.onload = () => {
      if(postCategorys.status === 200) {
        console.log('Categorys saved successfully!');
      }
      else{
        console.error('Error saving categorys:', postCategorys.statusText);
      }
    }

    postCategorys.open('POST', '../../categorys.json');
    postCategorys.setRequestHeader('Content-Type', 'application/json');
    postCategorys.send(JSON.stringify(newCategorys));
  }
