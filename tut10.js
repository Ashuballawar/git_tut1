

const form=document.querySelector("form");
namedetail=document.getElementById('name');
form.addEventListener('submit',localstorage);
//form.addEventListener('submit',e=>{
//     if(!e.checkValidity()){
//         e.preventDefault()}
//         form.classList.add('was validated');
       
//     }
// )
function localstorage(e){
    e.preventDefault();
     namedetail=document.getElementById('name');
     emaildetail=document.getElementById('email');
     phonedetail=document.getElementById('phone');
     datedetail=document.getElementById('date');
     timeedetail=document.getElementById('time');
     namedetailtext=namedetail.value;
     emaildetailtext= emaildetail.value;
     phonedetailtext= phonedetail.value;
     datedetailtext= datedetail.value;
     timeedetailtext=timeedetail.value;
     localStorage.setItem('namedetail', namedetailtext);
     localStorage.setItem('emaildetail',  emaildetailtext);
     localStorage.setItem('phonedetail', phonedetailtext);
     localStorage.setItem('datedetail',datedetailtext);
     localStorage.setItem('timedetail', timeedetailtext);
   
}