let a=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1)
    },1000)
})

console.log(a)