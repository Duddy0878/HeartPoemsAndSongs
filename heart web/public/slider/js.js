
const productContainers = [...document.querySelectorAll('.product-container')];

const preBtn = [...document.querySelectorAll('.pre-btn')];

const nextBtn = [...document.querySelectorAll('.next-btn')];



 productContainers.forEach((item,i) => { let containerDimensions= item.getBoundingClientRect();
    let containerwith= containerDimensions.width;

    nextBtn[i].addEventListener('click',() =>{
        item.scrollLeft += containerwith;
    })
    
    preBtn[i].addEventListener('click',() =>{
        item.scrollLeft -= containerwith;
    })
})

