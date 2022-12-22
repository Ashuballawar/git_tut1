
 
const form=document.querySelector("form");
body=document.querySelector('body');
namedetail=document.getElementById('name');

form.addEventListener('submit',localstorage);
window.addEventListener('DOMContentLoaded',reload);


//storing data in local storage
function localstorage(e){
    e.preventDefault();
   
presonal={
    name:e.target.name.value,
     email:e.target.email.value,
    phone:e.target.phone.value,
    date:e.target.date.value,
    time:e.target.time.value,
}

axios.post("https://crudcrud.com/api/dfcb991ad441414288ce59ffe426dac1/appointmentData",presonal)
   .then(res=>{
    printuser(res.data);
    console.log(res)})
   .catch(err=>{
    document.body.innerHTML= document.body.innerHTML+'<h4>Something went wrong</h4>'
    console.log(err)});


// if(localStorage.getItem(presonal.email)){
//     delete1(presonal.email);
// }
// personal_json=JSON.stringify(presonal);
// localStorage.setItem(presonal.email,personal_json);  
// printuser(presonal);


}

//creating ul tag in form
ul=document.createElement('ul');
ul.setAttribute('id','userdetail');
form.appendChild(ul);


ul.addEventListener('click',deleteitem);

//deleting item
function deleteitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        li=e.target.parentElement;
       axios.delete(`https://crudcrud.com/api/dfcb991ad441414288ce59ffe426dac1/appointmentData/${li.id}`)
        ul.removeChild(li);
}}


ul.addEventListener('click',edititem);

//editing item
 async function edititem(e){
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        li=e.target.parentElement;
        name1=document.getElementById('name');
        email=document.getElementById('email');
        phone=document.getElementById('phone');
        date=document.getElementById('date');
       time=document.getElementById('time');
       
      name1.value=reverse.name;
     email.value=reverse.email;
      phone.value=reverse.phone;
      date.value=reverse.date;
     time.value=reverse.time;
     form.addEventListener('submit',editsubmit);
     async function editsubmit(e){
      e.preventDefault();
     
        let reverse;
        await axios.put(`https://crudcrud.com/api/dfcb991ad441414288ce59ffe426dac1/appointmentData/${li.id}`,
        { name:e.target.name.value,
        email:e.target.email.value,
       phone:e.target.phone.value,
       date:e.target.date.value,
       time:e.target.time.value,})
        .then(res=>{
          
               reverse=res.data;
        })
        .catch(err=>console.log(err));
      //  await axios.delete(`https://crudcrud.com/api/dfcb991ad441414288ce59ffe426dac1/appointmentData/${li.id}`)
       // reverse=JSON.parse(localStorage.getItem(li.id));
     
      //   name1=document.getElementById('name');
      //    email=document.getElementById('email');
      //    phone=document.getElementById('phone');
      //    date=document.getElementById('date');
      //   time=document.getElementById('time');
        
      //  name1.value=reverse.name;
      // email.value=reverse.email;
      //  phone.value=reverse.phone;
      //  date.value=reverse.date;
      // time.value=reverse.time;
     


      //  ul.removeChild(li);
      //  localStorage.removeItem(li.id);
}}}

//printing user detail
function printuser(presonal){
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('date').value="";
    document.getElementById('time').value="";
   delbtn=document.createElement('button');
   delbtn.value='delete';
   delbtn.style.height='30px';
   delbtn.style.width='40px';
   delbtn.style.margin='5px';
   delbtn.style.padding='0px';
   delbtn.style.border='2px solid black';
   delbtn.style.fontSize='12px';
   delbtn.appendChild(document.createTextNode('delete'));
   edit=document.createElement('edit');
   edit.value='edit';
   edit.style.height='30px';
   edit.style.width='40px';
   delbtn.style.padding='unset';
   edit.appendChild(document.createTextNode('edit'));
   delbtn.className='btn btn-danger btn-sm float-right delete' ;
   edit.className='btn btn-sm btn-dark float-right edit';
   li=document.createElement('li');
   reverse=presonal;
   //reverse=JSON.parse(localStorage.getItem(presonal.email));
   li.id=(reverse._id);
 li.appendChild( document.createTextNode(reverse.name+" "+reverse.email+" "+reverse.phone+" "+reverse.date+" "+reverse.time));
 li.appendChild(delbtn);
 li.appendChild(edit);
 ul.appendChild(li);
//ul.innerHTML=`<li id=${reverse.email}>${reverse.name} ${reverse.email} ${reverse.phone} ${reverse.date} ${reverse.time}</li>`;
}
// footer=document.createElement('footer');
// body.appendChild(footer);
// h=document.createElement('h6');
// footer.appendChild(h);
// h.appendChild(document.createTextNode('old user'));
// ulf=document.createElement('ul');
// footer.appendChild(ulf);



//printing old user 
async function reload(e){
    e.preventDefault();
  
   
  let totalemp;
  await axios.get("https://crudcrud.com/api/dfcb991ad441414288ce59ffe426dac1/appointmentData")
  .then(res=>{
    totalemp=res.data;
  }).catch(err=>console.log(err));
  
totalemp.forEach(element => {   
  // lif=document.createElement('li');
       printuser(element);
  // lif.appendChild(document.createTextNode( element.name+" "+element.email+" "+element.phone+'\n'));
  // ulf.appendChild(lif);
});


}
//replacing old user with same user id
    function delete1(a){
     ul=document.getElementById('userdetail')
     li=document.getElementById(a);
    if(li){
        ul.removeChild(li);
    }
   
    }