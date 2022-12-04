i=0;
const form=document.querySelector("form");
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
localStorage.setItem(i,personal_json);  
ul=document.createElement('ul')
form.appendChild(ul);

    li=document.createElement('li');
li.appendChild(document.createTextNode(localStorage.getItem(i)));
ul.appendChild(li);
i++;

}
//form=document.getElementsByTagName('form');





    