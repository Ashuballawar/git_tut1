const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post two', body:'This is post two'}
]

function getPosts(){
  return new Promise((resolve, reject) => {
    
 
    setTimeout(()=>{
       
        let output="";
   posts.forEach(post => {
    
      output+=`<li>${post.title}</li>`
      console.log(post.title);
   });
   document.body.innerHTML=output;
    
},1000)

resolve()})
}

 async function createPost(post){
      await new Promise((resolve, reject)=>{
     
         posts.push(post);
         const error=false;
         setTimeout(()=>{
         if(!error){
            getPosts();  
             resolve();  
              
         }
         
         
         else{
             reject('Error: Something went wrong');
         }
            
     },5000)});
    await deletepost();
            
          
       
       
   
    await getPosts();
       
   

 }

 createPost({title:'Post Three', body:'This is post three'});
 
 
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