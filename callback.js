const posts=[
    {title:'Post One', body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post two', body:'This is post two',createdAt:new Date().getTime()}
]
let interval=0;
function getPosts(){
    
    interval=setInterval(()=>{
       
        let output="";
   posts.forEach(post => {
    
      output+=`<li>${post.title}===> createdAt-${Math.floor((new Date().getTime()-post.createdAt)/1000)} seconds ago</li>`
   });
   document.body.innerHTML=output;
    console.log(interval)
},1000)

clearInterval(interval);
}
//getPosts();
function createPost(post,callback){
    setTimeout(()=>{
   posts.push({...post,createdAt:new Date().getTime()});
   callback();
    },2000);
}

function create4thpost(post,callback1){
    setTimeout(()=>{
       // posts.push({title:'Post Three', body:'This is post three',createdAt:new Date().getTime()});
       posts.push({...post,createdAt:new Date().getTime()});
       // callback1(post,getPosts);
       callback1();
    },6000);
}
getPosts();
 createPost({title:'Post Three', body:'This is post three'},getPosts);

//create4thpost({title:'Post four',body:'This is post four',createdAt:new Date().getTime()},createPost);
create4thpost({title:'Post four',body:'This is post four'},getPosts);

let timer;
let counter=0

function lastmodification(){
    let counter=0;
    
timer=setInterval(()=>{
    
    counter++;
    
   
    document.body.innerHTML+=`<li>Last Edited ${counter} seconds ago</li>`;

},5000)
clearInterval(timer);
}
lastmodification();