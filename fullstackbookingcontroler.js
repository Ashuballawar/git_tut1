const empData=require('../models/data')


exports.empdata=async (req,res,next)=>{
        
    try{
        if(!req.body.Phonenumber){
            res.status(400).json({err:' phonenumber is missing'})
            throw new Error('Phone no. is Mandatory')
        }
    const Name=req.body.Name
    const Email=req.body.Email
    const Phonenumber=req.body.Phonenumber
    const Date=req.body.Date
    const Time=req.body.Time
  data=await empData.create({
    Name:Name, 
    Email:Email,
    Phonenumber:Phonenumber,
    Date:Date,
    Time:Time
   })
    res.status(200).json(data)
}
catch(err){
     res.status(500).json({error:err})
}

  
}

exports.getempdata=async (req,res,next)=>{
    try{
     data=await empData.findAll()
        console.log("success")
        res.status(200).json(data)}
     catch(err){
        res.status(500).json({error:err})
     
  
}}
exports.getuserdatabyid=async (req,res,next)=>{
    try{
        data=await empData.findAll({where:{id:req.params.id}})
           console.log("successid")
           res.status(200).json(data[0])}


        catch(err){
           res.status(500).json({error:err})
        
     
   }
   
 
}

exports.deletedata=async (req,res,next)=>{
    try{
        if(!req.params.id){
            res.status(400).json({err:'id is missing'})
            throw new Error('id is wrong')
        }
        data=await empData.destroy({where:{id:req.params.id}})
        console.log('deleted')
    }
    catch(err){
        res.status(500).json({error:err})
    }
}