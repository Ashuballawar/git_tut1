signupform=document.getElementById('signupform');
signupform.addEventListener('submit',signup);
async function signup(e){
     e.preventDefault();
     userinfo={
      Name:e.target.Name.value,
      Email:e.target.Email.value,
      Password:e.target.Password.value
     }
     await axios.post("http://localhost:4000/user/signup",userinfo)

  
    }
