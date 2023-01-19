const userData=require('../models/userData')
const bcrypt=require('bcryptjs')

exports.adduserdata=async (req,res,next)=>{
        const Name=req.body.Name
        const Email=req.body.Email
        const Password=req.body.Password
       
        try{
            bcrypt.hash(Password,10,async(err,hash)=>{
                console.log(err)
                data=await userData.create({Name:Name,Email:Email,Password:hash})
                res.status(201).json(data)
            }) 
      
        }
        catch(err){
            if(err.name=="SequelizeUniqueConstraintError"){
                res.status(403).json({error:err})
            }
            else{res.status(500).json({error:err})}
        }
}

exports.userlogin=async (req,res,next)=>{
    const Email=req.body.Email
    const Password=req.body.Password
   
    try{
    user=await userData.findAll({where:{Email:Email}})
    console.log(user[0])
    if(user[0]){
        bcrypt.compare(Password,user[0].Password,(err,result)=>{
           if(err){
            throw new Error('Something went wrong')
           }
           
            else if(result===true){
                res.status(201).json({msg:'success'})
            }
            else{
                res.status(401).json({msg:'Incorrect Password'})
            }
        })
       
    }   
    else{
        res.status(404).json({msg:'Incorrect EmailId'})
    } }

    catch(err){
        res.status(500).json({error:err})
    }
}
