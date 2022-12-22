


body=document.querySelector('body');
let form=document.querySelector("form");
ul=document.createElement('ul');
ul.setAttribute('id','list');
form.appendChild(ul);
form.addEventListener('submit',localstorage);


//sending data to cloud
async function localstorage(e){
    
    e.preventDefault();  
    
   let expence={
        amount:e.target.amount.value,
        description:e.target.description.value,
       category:e.target.category.value,
       
    }
    let m;
    await axios.post("https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker",expence)
    .then(res=>{
        printuser(res.data,res.data._id);
       
    }).catch(err=>{
        console.log(err);
    })
  
   
   
    
    }
    
   //printing data 
async function printuser(expence,m){
    document.getElementById('amount').value="";
    document.getElementById('description').value="";
    document.getElementById('category').value="Select";

    li=document.createElement('li');
   
   
   let reverse;

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
       
  await axios.delete(`https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker/${li.id}`)
        ul.removeChild(li);
}}

ul.addEventListener('click',edititem)

  async function edititem(e){
    console.log(1);
    e.preventDefault();
    if(e.target.classList.contains('edit')){
        li=e.target.parentElement;
       let reverse;
       await axios.get(`https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker/${li.id}`)
       .then(res=>{
        reverse=res.data;
       }).catch(err=>{
        console.log(err)
       })
   //    reverse=JSON.parse(localStorage.getItem(li.id));
      document.getElementById('amount').value=reverse.amount;
      document.getElementById('description').value=reverse.description;
      document.getElementById('category').value=reverse.category;
      ul.removeChild(li);
      await axios.delete(`https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker/${li.id}`)
      .then(res=>{
        console.log(res);
       }).catch(err=>{
        console.log(err)
       })
    

        
    }}
    
   
    window.addEventListener('DOMContentLoaded',reload);
    async function reload(e){
        e.preventDefault();
        let server
        await axios.get("https://crudcrud.com/api/6702c71e62124de98339f206741442e1/expencetracker")
        .then(res=>{
                server=res.data;
        })
        server.forEach(element => {
          
              printuser(element,element._id);
         
        });
       
       
    }

