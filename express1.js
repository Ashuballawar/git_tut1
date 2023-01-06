const http=require('http')

const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('first midllwares')
    //res.send('<h1> hello to node js </h1>')
    res.send( { key1:'value' }) 
    next();
})
app.use((req,res,next)=>{
    console.log('second midllwares')
    
})


app.listen(4000)