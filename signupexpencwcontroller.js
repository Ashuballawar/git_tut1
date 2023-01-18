const userData=require('../models/userData')

exports.adduserdata=async (req,res,next)=>{
        const Name=req.body.Name
        const Email=req.body.Email
        const Password=req.body.Password
        try{
           
       data=await userData.create({Name:Name,Email:Email,Password:Password})
              res.status(201).json(data)
        }
        catch(err){
            if(err.name=="SequelizeUniqueConstraintError"){
                res.status(403).json({error:err})
            }
            else{res.status(500).json({error:err})}
        }
}
