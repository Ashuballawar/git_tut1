const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const userpostRoutes=require('./routes/userdata')
const getuserdataRoutes=require('./routes/getuserdata')
const userdeleteRoutes=require('./routes/deleteuserdata')
const getuserdataidRoutes=require('./routes/getuserid')
const sequelize=require('./data/database')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors());
app.use(getuserdataRoutes);
app.use(getuserdataidRoutes);
app.use(userpostRoutes);
app.use(userdeleteRoutes)

sequelize.sync().then(result=>{
   // console.log(result)
    app.listen(8000);
})
.catch(err=>{
    console.log(err)
})

