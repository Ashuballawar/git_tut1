fprm=document.getElementById('form-forgot')


form.addEventListener('submit',async function(e){
    e.preventDefault();
    response=await axios.get('http://localhost:4000/called/password/forgotpassword')

})