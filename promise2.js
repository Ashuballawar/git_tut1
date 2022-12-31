const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post two', body:'This is post two'}
]
u=document.createElement('u1');
body=document.querySelector('body');
body.appendChild(u);
function getPosts(){
  
    setTimeout(()=>{
       
        let output="";
   posts.forEach(post => {
             console.log(post.title);
      output+=`<li>${post.title} </li>`
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
            resolve('post created');       
        }
        
        
        else{
            reject('Error: Something went wrong');
        }
    },1000);        
    });
}

//let promise1=Promise.resolve('hello world');
//let promise2=10;
//let promise3=new Promise((resolve,reject)=>
//setTimeout(resolve,2000,'Goodbye'));
// let promise=new Promise(resolve=>setTimeout(resolve,1000,`updateLastUserActivityTime-${new Date()}`))
 let promise=function(){
     return new Promise((resolve, reject) => {     
           
         setTimeout(()=>{
       // document.body.innerHTML+=''+`updateLastUserActivityTime-${new Date()}`;
         
          
          //console.log(`Last Upadate activity:${new Date()}`);
         
             resolve(`Last Upadate activity:${new Date()}`);
         },1000)
                      
                    
       
       })
 }
//Promise.all([promise1,promise3,promise()]).then(values=>console.log(values)).catch(err=>console.log(err));

Promise.all([createPost({title:'Post Three', body:'This is post three'}),promise()])
.then(([res1,res2])=>{

   console.log(res1,res2)
    getPosts();
      deletepost().then(()=>{
        getPosts();
      })})

      function deletepost(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(posts.length>0){
                    posts.pop()
                    resolve();
                }
                else{
                    reject("Array is empty")
                }
            },1000);
        })
        
        
        };