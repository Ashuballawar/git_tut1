

loginform=document.getElementById('loginform')

loginform.addEventListener('submit',login)

async function login(e){
    let response
    e.preventDefault();
    User={Email:e.target.Email.value,
    Password:e.target.Password.value
    }

    try{
  response=await axios.post("http://localhost:4000/user/login",User)
  console.log(response)
 
   if(response.status==201){
    alert('login successful')
    window.location.href="./exp.html"
 }
  else{
    throw new Error('login Failed')
  }
  
  }             
    
    catch(err){        
         
        document.body.innerHTML+=`<div style="color:red;">${err.response.data.msg}</div>`
    }}


