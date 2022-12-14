


body=document.querySelector('body');
let form=document.querySelector("form");
ul=document.createElement('ul');
ul.setAttribute('id','list');
form.appendChild(ul);
form.addEventListener('submit',localstorage);
function localstorage(e){
    
    e.preventDefault();  
    console.log(1);
    let m=new Date().getTime();
    console.log(m);
   let expence={
        amount:e.target.amount.value,
        description:e.target.description.value,
       category:e.target.category.value,
       
    }
    // if(localStorage.getItem(presonal.email)){
    //     delete1(presonal.email);
    // }
  
   let expence_json=JSON.stringify(expence);
    localStorage.setItem(m,expence_json);  
    printuser(expence,m);
   
    i++;
    
    }
    

function printuser(expence,m){
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value="Select";

    li=document.createElement('li');
   
    reverse=JSON.parse(localStorage.getItem(m));
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
function deleteitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        li=e.target.parentElement;
        localStorage.removeItem(li.id);
        ul.removeChild(li);
}}

ul.addEventListener('click',edititem)
  function edititem(e){
    console.log(1);
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        li=e.target.parentElement;
       reverse=JSON.parse(localStorage.getItem(li.id));
      document.getElementById('amount').value=reverse.amount;
      document.getElementById('description').value=reverse.description;
      document.getElementById('category').value=reverse.category;
      ul.removeChild(li);
      localStorage.removeItem(li.id);

        
    }}
    
    footer=document.createElement('footer');
    body.appendChild(footer);
    h=document.createElement('h6');
    h.appendChild(document.createTextNode('Past Expence'));
    footer.appendChild(h);
    ulf=document.createElement('ul');
    footer.appendChild(ulf);
    window.addEventListener('DOMContentLoaded',reload);
    function reload(e){
        e.preventDefault();
        Object.keys(localStorage).forEach(element => {
            reverse=JSON.parse(localStorage.getItem(element));
            lif=document.createElement('li');
            lif.appendChild(document.createTextNode(reverse.amount+"-"+reverse.description+"-"+reverse.category));
            ulf.appendChild(lif);

        });
       
       
    }

