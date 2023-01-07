const express=require('express');

 
const fs=require('fs')
const app=new express();

const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.get('/login',(req,res,next)=>{
     res.send('<html><body><form action="/" method="GET" onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input type="text" name="username"  id="username" placeholder="username"><button type="submit">log in</button></form></body><script ><script></html>')

        
})

 app.post('/',(req,res,next)=>{
    console.log(req.body)
    
   fs.appendFileSync('message.txt',`${req.body.username}:${req.body.message}`)

 res.redirect('/')})


 app.get('/',(req,res,next)=>{

     const data=fs.readFileSync('message.txt')
   res.write(`<html><body><p>${data}</p></body></html>`)
    res.write('<html><body><form action="/" method="POST" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)"><input type="hidden" name="username" id="username"><input type="text" name="message" placeholder="message" id="message"><button type="submit">send</button></form></body></html>')
    res.end();
 })
 

app.listen(4000);