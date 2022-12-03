namedetail=document.getElementById('name');
form.addEventListener('submit',localstorage);
function localstorage(e){
    e.preventDefault();
presonal={
    name:e.target.name.value,
     email:e.target.email.value,
    phone:e.target.phone.value,
    date:e.target.date.value,
    time:e.target.time.value,
}
personal_json=JSON.stringify(presonal);
localStorage.setItem('client detail',personal_json);


}