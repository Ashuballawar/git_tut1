//examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// //document.title=123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.all);
// console.log(document);
// console.log(document.all[10]);
// document.all[10].textContent='hello';
//console.log(document.forms);
//console.log(document.forms[0]);
// console.log(document.getElementById('header-title'));
//  header=document.getElementById('header-title');
//  box=document.getElementById('main-header');
//  //header.textContent='hello'; 
// //  header.innerText='Goodbye';
// console.log(header.innerText);
// console.log(header.innerHTML);
// console.log(header.textContent);
// header.innerHTML='<h3>hello</h3>';

//header.style.borderBottom='solid 3px black';
//box.style.border='solid 3px black';
// title=document.getElementById('additem');
// title.style.fontWeight='bold';
// title.style.color='green';
// items=document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor='green';
// for (let i =0; i<items.length; i++){
//         items[i].style.fontWeight='bold';
// }

//get element by tag name

// li=document.getElementsByTagName('li');
// console.log(li);
// li[2].style.backgroundColor='green';
// for (let i =0; i<li.length; i++){
//         li[i].style.fontWeight='bold';
// }

//query selector
// header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px black';
// input=document.querySelector('input');
// input.value='hello world';
// submit=document.querySelector('input[type="submit"]');
// submit.value='send';
// item=document.querySelector('.list-group-item');
// item.style.color='red';
// lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';
// thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';
//queryselectorall
// titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hello';
// odd=document.querySelectorAll('li:nth-child(odd)');
// even=document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//    odd[i].style.backgroundColor='green';
//    even[i].style.backgroundColor='#ccc';
    
// }

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

img=document.createElement='img';

img.setAttribute=('url','berry.jpg');

body=querySelector('body');
body.appendChild(img);






