// Doubleueb

let modal =  document.querySelector('.modal-1'),
openModal = document.querySelector('.modal-1-open'),
closeModal = document.querySelector('.modal-1-close');


openModal.addEventListener('click',function(){
 modal.style.display = 'block';
})  

closeModal.addEventListener('click',function(){
 modal.style.display = 'none';
})  

window.addEventListener('click',function(e){
 if(e.target == modal)  {modal.style.display = 'none';}      
})  

//golden w studio

let modal2 =  document.querySelector('.modal-2'),
openModal2 = document.querySelector('.modal-2-open'),
closeModal2 = document.querySelector('.modal-2-close');


openModal2.addEventListener('click',function(){
 modal2.style.display = 'block';
})  

closeModal2.addEventListener('click',function(){
 modal2.style.display = 'none';
})  

window.addEventListener('click',function(e){
 if(e.target == modal2)  {modal2.style.display = 'none';}      
}) 

// modal-messag

let modalmsg =  document.querySelector('.modal-message'),
openModalmsg = document.querySelector('.button-send-us'),
closeModalmsg = document.querySelector('.modal-message-close') ;
// sendModalmsg = document.querySelector('.modal-message-send') ;

openModalmsg.addEventListener('click',function(){
 modalmsg.style.display = 'block';
})  

closeModalmsg.addEventListener('click',function(){
 modalmsg.style.display = 'none';
})  

// sendModalmsg.addEventListener('click',function(){
//     modalmsg.style.display = 'none';
//    })  

window.addEventListener('click',function(e){
    if(e.target == modalmsg)  {modalmsg.style.display = 'none';}      
   }) 

// come back internet block

const form = document.querySelector('form');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
const mess = document.getElementById("message");



function sendEmail(){
    const bodyMessage = `Full name: ${firstName.value}\n${lastName.value}<br> Email: ${email.value}
    <br> Message: ${mess.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "Heartpoemsandsongs@gmail.com",
        Password : "7F955234C90DD5084BFF4097491C27E79A5D",
        To : 'Heartpoemsandsongs@gmail.com',
        From : "Heartpoemsandsongs@gmail.com",
        Subject :'customer message',
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "message sent!",
                text: "will get back to you as soon as posible!",
                icon: "success",
                color: "#c2a579",
                iconColor: "#c2a579",
                confirmButtonColor: "#c2a579",
                background: '#fdf8ea'
            });
          }
      }); 
   }


   function checkInputs(){
    const items = document.querySelectorAll('.items');
    for (const item of items) {
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }       

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
            
        });

        item.addEventListener("keyup", () =>{
            if(item.value != ""){
                item.classList.remove("error");
            item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
            item.parentElement.classList.add("error");
            }
        })
    }
   }

   function checkEmail ()
{
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;;

    const errorTxtEmail = document.querySelector('.error-txt.email')

    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerText = "*Enter A Valid Email Addres";
        }
        else{
            errorTxtEmail.innerText = "*this box cant be blank";
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");  
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
     checkInputs();
     if(!firstName.classList.contains("error") && !lastName.classList.contains("error") && !email.classList.contains("error") && !mess.classList.contains("error") ){
        sendEmail();
        
     }
      
    
})






