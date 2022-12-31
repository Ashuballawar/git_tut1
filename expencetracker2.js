


body=document.querySelector('body');
let form=document.querySelector("form");
ul=document.createElement('ul');
ul.setAttribute('id','list');
form.appendChild(ul);
form.addEventListener('submit',localstorage);



async function localstorage(e){
    e.preventDefault(); 
    let expence={
        amount:e.target.amount.value,
        description:e.target.description.value,
       category:e.target.category.value,
       
    }
    if(expence.category=='Select'){
        alert('plz choose categery')
      }
      else{
    
    try {
        res=await axios.post("https://crudcrud.com/api/c83a8c7f0ebb4bafb4ed1866adb3a394/expencetracker",expence)
        printuser(res.data,res.data._id);
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
        await axios.delete(`https://crudcrud.com/api/c83a8c7f0ebb4bafb4ed1866adb3a394/expencetracker/${li.id}`)
        console.log("deleted successfully")
        ul.removeChild(li);
       } catch (error) {
        document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
        console.log(error);
      
         
       } 
      
}}



ul.addEventListener('click',edititem)
  async function edititem(e){
 
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        li=e.target.parentElement;
        try {
            let res=await axios.get(`https://crudcrud.com/api/c83a8c7f0ebb4bafb4ed1866adb3a394/expencetracker/${li.id}`)
            reverse=res.data;
            document.getElementById('amount').value=reverse.amount;
            document.getElementById('description').value=reverse.description;
            document.getElementById('category').value=reverse.category;
            ul.removeChild(li);
            await axios.delete(`https://crudcrud.com/api/c83a8c7f0ebb4bafb4ed1866adb3a394/expencetracker/${li.id}`)
        } catch (err) {
            document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
            console.log(err)
        }        
    }}
    
  
    window.addEventListener('DOMContentLoaded',reload);
    async function reload(e){
        e.preventDefault();
        try {
            res=await axios.get("https://crudcrud.com/api/c83a8c7f0ebb4bafb4ed1866adb3a394/expencetracker")
            
                    server=res.data;
           
            server.forEach(element => {
              
                  printuser(element,element._id);
            })
            
        } catch (error) {
            document.body.innerHTML=document.body.innerHTML+`<h6>something went wrong</h6>`
            console.log(error)
        }  
       
       
    }

