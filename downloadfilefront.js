


body=document.querySelector('body');
let form=document.querySelector("form");
ul=document.createElement('ul');
ul.setAttribute('id','list');
form.appendChild(ul);
let token=localStorage.getItem('token')
form.addEventListener('submit',localstorage);
let leaderboardList=document.getElementById('leaderboad-list')

function showPremiumUser(){
  document.getElementById('rzp-button1').style.visibility='hidden'
  document.getElementById('premium-user').innerHTML='You are premium User'
}

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}


function showleaderboard(){
  let leaderboad=document.createElement('button')
  document.getElementById('premium-user').appendChild(leaderboad)
   
  leaderboad.innerHTML='leaderboard'
  leaderboad.id='leaderboard'
  document.getElementById('leaderboard').onclick=async function(e){
    e.preventDefault();
    leaderboardList.innerHTML="leaderboardList";
    let token=localStorage.getItem('token')
    let board=await axios.get("http://localhost:4000/premium/leaderboard",{headers:{"Authorization":token}})//expenditureData:data,userData:allUser
      board.data.forEach(element => {
        if(element){
     leaderboardList.innerHTML+=`<li>Name-${element.Name}-TotalExpence-${element.total_cost}</li>`}
     });
   

}

}

async function download(){
  let token=localStorage.getItem('token')
    let response=await axios.get("http://localhost:4000/user/download",{headers:{"Authorization":token}})
   console.log(response.data.fileName.fileName)
    if(response.status === 200){
      fileList.innerHTML+=`<li>${response.data.fileName.fileName}</li>`
      var a = document.createElement("a");
      a.href = response.data.fileURL;
      a.download = 'myexpense.csv';
      a.click();
}}

document.getElementById('rzp-button1').onclick=async function(e){
  e.preventDefault()
  const token=localStorage.getItem('token')
  
  const response=await axios.get('http://localhost:4000/purchase/premiummembership',{headers:{"Authorization":token}})
 
    let options=
    {
      "key":response.data.key_id,
      "order_id":response.data.order.id,

      "handler":async function(response){
        res=await axios.post('http://localhost:4000/purchase/premiummembership',{        
        order_id:options.order_id,
          payment_id:response.razorpay_payment_id
        },{headers:{"Authorization":token}})
        alert('You are a Premium User Now')
        localStorage.setItem('token', res.data.token)
        showPremiumUser();
        showleaderboard();
       


      }
      
    }
    const rzpl=new Razorpay(options)
    rzpl.open();
    e.preventDefault();
    rzpl.on('payment.failed',async function(response){
      console.log(response)
     
     let confirmation=await axios.post('http://localhost:4000/purchase/premiummembershipfailed',{        
        order_id:options.order_id,
          payment_id:response.razorpay_payment_id
        },{headers:{"Authorization":token}})
        alert(confirmation.data.message)
    })
}




async function localstorage(e){
    e.preventDefault(); 
    let expence={
        amount:e.target.amount.value,
        description:e.target.description.value,
       category:e.target.category.value,
      // token:localStorage.getItem('token')
       
       
    }
    if(expence.category=='Select'){
        alert('plz choose categery')
      }
      else{
    
    try {     
      
    
      res=await axios.post("http://localhost:4000/user/addData",expence,{headers:{'Authorization':token}})
        printuser(res.data,res.data.id);


   } catch (err) {
    console.log(err);
    document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
   }      
    
   
}
   
    
    }
    

async function printuser(expence,m){
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value="Select";

    li=document.createElement('li');
   
   
   let reverse;
//await axios.get(`https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker/${m}`)
  reverse=expence;
    li.id=m;
  li.appendChild( document.createTextNode(reverse.amount+"-"+reverse.description+"-"+reverse.category));
  
 delbtn=document.createElement('button');
 delbtn.value='delete';
 delbtn.appendChild(document.createTextNode('delete'))
 edit=document.createElement('button');
 edit.value='edit';
 edit.style.height='30px';
   edit.style.width='40px';
   delbtn.style.height='30px';
   delbtn.style.width='40px';
   delbtn.style.margin='5px';
   delbtn.style.padding='0px';
   delbtn.style.border='2px solid black';
   delbtn.style.fontSize='12px';
 edit.appendChild(document.createTextNode('edit'));
 delbtn.className='btn btn-danger  float-right delete' ;
   edit.className='btn btn-dark float-right edit';
   edit.style.padding='3px';
 li.appendChild(delbtn);
 li.appendChild(edit); 
 ul.appendChild(li);
}
ul.addEventListener('click',deleteitem);

//deleting item
async function deleteitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        li=e.target.parentElement;
       // localStorage.removeItem(li.id);
       try {
        let token=localStorage.getItem('token')
        await axios.delete(`http://localhost:4000/user/deleteData/${li.id}`,{headers:{'Authorization':token}})
        console.log("deleted successfully")
        ul.removeChild(li);
       } catch (error) {
        document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
        console.log(error);
      
         
       } 
      
}}



ul.addEventListener('click',edititem)
  async function edititem(e){
    let token=localStorage.getItem('token')
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        li=e.target.parentElement;
        try {
            let res=await axios.get(`http://localhost:4000/user/getdata/${li.id}`,{headers:{'Authorization':token}})
            reverse=res.data;
            document.getElementById('amount').value=reverse.amount;
            document.getElementById('description').value=reverse.description;
            document.getElementById('category').value=reverse.category;
            ul.removeChild(li);
            await axios.delete(`http://localhost:4000/user/deleteData/${li.id}`,{headers:{'Authorization':token}})
        } catch (err) {
            document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
            console.log(err)
        }        
    }}
    
    let fileList=document.getElementById('listOfFile')
    window.addEventListener('DOMContentLoaded',reload);
    async function reload(e){
        e.preventDefault();
        try {

           const token=localStorage.getItem('token')
           const decodeToken=parseJwt(token)
           const ispremiuruser=decodeToken.ispremiuruser
           if(ispremiuruser){
            showPremiumUser();
            showleaderboard();
           }
            res=await axios.get("http://localhost:4000/user/getdata",{headers:{'Authorization':token}});
             console.log(res)
                    server=res.data.data;
               console.log(res)
            server.forEach(element => {
              
                  printuser(element,element.id);
            })
          
            res.data.listOfDowloadedfile.forEach(element => {
              fileList.innerHTML+=`<li>${element.fileName}</li>`
                  });
            
            
        } catch (error) {
            document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
            console.log(error)
        }  
       
       
    }

   

    

