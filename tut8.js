form=document.getElementById('addForm');
itemList=document.getElementById('items');
filter=document.getElementById('filter');
//form submit event
form.addEventListener('submit',addItem);
itemList.addEventListener('click',deleteitem);
filter.addEventListener('keyup',filterItems) ;         
//add Item
function addItem(e){
    e.preventDefault();  
   newItem=document.getElementById('item');
   newItem1=document.getElementById('item1');
    li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem.value+" "+newItem1.value));
    //li.appendChild(" ");
    //li.appendChild(document.createTextNode(newItem1));
      deletebtn=document.createElement('button');
   deletebtn.className='btn btn-danger btn-sm float-right delete';
   deletebtn.appendChild(document.createTextNode('x'));
   editbtn=document.createElement('button');
   editbtn.className='btn btn-sm btn-sm float-right edit';
   editbtn.appendChild(document.createTextNode('edit'));
 
   li.appendChild(deletebtn);
   li.appendChild(editbtn);
    itemList.appendChild(li);
}
function deleteitem(e){
    
    if(e.target.classList.contains('delete')){
     if(confirm('Are you Sure')){
        li=e.target.parentElement;
        itemList.removeChild(li);
     }
    }}
  //filter item
  function filterItems(e){
    text=e.target.value.toLowerCase();
     items=itemList.getElementsByTagName('li');
   Array.from(items).forEach(function(item){
itemName=item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
}
else{
    item.style.display='none';
}
     });


  }

   
