itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


//childnode
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
//first child
//console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';
//console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';
//create a div
newdiv=document.createElement('div');
// console.log(newdiv);
// newdiv.className='hello';
// console.log(newdiv);
newdiv.id='hello1';
// console.log(newdiv);
newdiv.setAttribute('title','Hello Div');
//console.log(newdiv);
//vreate text node
newdivtext=document.createTextNode('hello world');
//add text to div
newdiv.appendChild(newdivtext);
console.log(newdiv);
container=document.querySelector('header .container');
h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1);
ul=document.querySelector('ul');
newspan=document.createElement('span');
newspan.id='beforeli';
newspan.setAttribute=('title','bli');
newspantext=document.createTextNode('hello li');
newspan.appendChild(newspantext);
li=document.querySelector('li');
ul.insertBefore(newspan,li);








