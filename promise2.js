const posts=[
    {title:'Post One', body:'This is post one',Lastactivity:new Date()},
    {title:'Post two', body:'This is post two',Lastactivity:new Date()}
]
u=document.createElement('u1');
body=document.querySelector('body');
body.appendChild(u);
function getPosts(){
  
    setTimeout(()=>{
       
        let output="";
   posts.forEach(post => {
             console.log(post.title);
      output+=`<li>${post.title}--Lastactivity:${post.Lastactivity}  </li>`
   });
 //  u.appendChild(output);
   document.body.innerHTML=output;
    
},1000)

}

function createPost(post){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();       
        }
        
        
        else{
            reject('Error: Something went wrong');
        }
    },1000);        
    });
}

let promise1=Promise.resolve('hello world');
//let promise2=10;
let promise3=new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Goodbye'));
// let promise=new Promise(resolve=>setTimeout(resolve,1000,`updateLastUserActivityTime-${new Date()}`))
 let promise=function(){
     return new Promise((resolve, reject) => {     
           
         setTimeout(()=>{
          //  let output=''+`updateLastUserActivityTime-${new Date()}`;
         
          
          console.log(`Last Upadate activity:${new Date()}`);
         
             resolve();
         },1000)
                      
                    
       
     })
 }
//Promise.all([promise1,promise3,promise()]).then(values=>console.log(values)).catch(err=>console.log(err));

Promise.all([createPost({title:'Post Three', body:'This is post three',Lastactivity:new Date()}),promise()])
.then(()=>{
    getPosts();
      deletepost()}).then(()=>{
        getPosts();
      })

      function deletepost(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(posts.length>0){
                  
                    resolve(posts.pop());
                }
                else{
                    reject("Array is empty")
                }
            },1000);
        })
        
        
        };