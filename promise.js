const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post two', body:'This is post two'}
]

function getPosts(){
  
    setTimeout(()=>{
       
        let output="";
   posts.forEach(post => {
    
      output+=`<li>${post.title}</li>`
   });
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

createPost({title:'Post Three', body:'This is post three'})
.then(()=>{
    getPosts()
    deletepost().then(()=>{
        getPosts();
        deletepost().then(()=>{
           getPosts();
            deletepost().then(()=>{
                getPosts();
                deletepost().then(()=>{

                }).catch((err)=>{
                    console.log('Inside catch block',err)
                })
            }).catch((err)=>{
                console.log('Inside catch block',err)
            })
        }).catch((err)=>{
            console.log('Inside catch block',err)
        })
    }).catch((err)=>{
        console.log('Inside catch block',err)
    })
    
       

    }).catch((err)=>{
        console.log('Inside catch block',err)
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