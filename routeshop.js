const http=require('http')

const bodyParser=require('body-parser')

const express=require('express');

const adminRoutes=require('./route/admin')

const shopRoutes=require('./route/shop')

const app=express();

app.use(bodyParser.urlencoded({extended:false}))



app.use('/shop',shopRoutes)

app.use('/admin',adminRoutes);



app.use((req,res,next)=>{

  res.status(404).send('<h1>Page not found</h1>')

})



app.listen(4000)





admin

const express=require('express')



const router=express.Router();





  

  router.get('/add-product',(req,res,next)=>{

    

      res.send('<form action="/admin/add-product" method="POST"><input types="text" name="title"><input types="text" name="size"><button type="submit">Add product</button></form>')

  })



  router.post('/add-product',(req,res,next)=>{

    console.log(req.body);

    res.redirect('/shop');



})



module.exports=router;

