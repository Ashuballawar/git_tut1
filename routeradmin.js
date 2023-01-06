

const http=require('http')

const bodyParser=require('body-parser')

const express=require('express');

const adminRoutes=require('./route/admin')

const shopRoutes=require('./route/shop')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))



app.use(shopRoutes)

app.use(adminRoutes);



app.use((req,res,next)=>{

  res.status(404).send('<h1>Page not found</h1>')

})



app.listen(4000)