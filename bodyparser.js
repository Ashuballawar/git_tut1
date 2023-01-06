const http=require('http')
const bodyParser=require('body-parser')
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded())
app.use('/',(req,res,next)=>{
 
  next()
})

app.use('/add-product',(req,res,next)=>{
  
    res.send('<form action="/product" method="POST"><input types="text" name="title"><input types="text" name="size"><button type="submit">Add product</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

})

app.use('/',(req,res,next)=>{
   
    res.send('<h1>"Hello from express 1"</h1>')
})


app.listen(4000)