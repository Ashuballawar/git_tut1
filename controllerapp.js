


const http=require('http')
const bodyParser=require('body-parser')
const express=require('express');
const adminRoutes=require('./route/admin')
const shopRoutes=require('./route/shop')
const contactRoutes=require('./route/contactus')
const app=express();
const path=require('path')
const productController=require('./controller/error')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
app.use('/shop',shopRoutes)
app.use('/admin',adminRoutes);
app.use(contactRoutes)
app.use(productController.pageNotFound)

app.listen(3000)