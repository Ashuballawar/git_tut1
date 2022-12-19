async function playpalystation(){
console.log('a');
console.log('b');
const message= await new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Buying a playstation');
    },1000)
   
})
console.log(message);
const message2=await new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Booting the p5');
        resolve('Booting successful');
    },500);
})
console.log(message2);
console.log('playing');
}
playpalystation();