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

exports.userlogin=async (req,res,next)=>{
    const Email=req.body.Email
    const Password=req.body.Password
    try{
    user=await userData.findAll({where:{Email:Email}})
    console.log(user[0])
    if(user[0]){
        if(user[0].Password===Password){
            res.status(201).json({msg:'success'})
        }
        else{
            res.status(401).json({msg:'401 (User not authorized)'})
        }
    }   
    else{
        res.status(404).json({msg:'404 (User not found)'})
    } }

    catch(err){
        res.status(500).json({error:err})
    }
}
