const expencedata=require('../models/data')
const jwt=require('jsonwebtoken')



function isinvalid(a){
   if(a===undefined||a.length===0){
      return true;
   }
   return false;
}
exports.addData=async (req,res,next)=>{
   
   if(isinvalid(req.body.amount)){
      return res.status(400).json({err:' amount is missing'})
   }
   console.log(jwt.verify(req.body.token,'smsmswmsksk223ms'))
   
   try{
       
        const amount=req.body.amount
        const description=req.body.description
        const category=req.body.category   
        const userdatumId=(jwt.verify(req.body.token,'smsmswmsksk223ms')).userdatumId
     data=await expencedata.create({amount:amount,description:description,category:category,userdatumId:userdatumId})
     res.status(201).json(data)
     console.log('successfully AddData') 
      }
     
     
      catch(err){
        console.log(err)
        res.status(500).json({error:err})
       }
}
    
exports.getdata=async (req,res,next)=>{
   try{
        data=await expencedata.findAll({where:{userDatumId:req.user.id}})
        console.log('successfully sendData') 
         res.status(200).json(data)
   }
   catch(err){
    console.log(err)
    res.status(500).json({error:err})
   }
}

exports.deleteData=async (req,res,next)=>{
   try{    
    if(!req.params.id){
        res.status(400).json({error:'wrong id'})
    }
    data=await expencedata.destroy({where:{id:req.params.id}})
      console.log('successfully deleted') 
      res.status(200).json(data) 
   }
   catch(err){
    console.log(err)
    res.status(500).json({error:err})
   }
}

exports.getDatabyId=async (req,res,next)=>{
   try{
    if(!req.params.id){
        res.status(400).json({error:'wrong id'})
    }
    data=await expencedata.findAll({where:{id:req.params.id}})
    console.log('successfully sendData') 
    res.status(200).json(data[0])  
   }
   catch(err){
    console.log(err)
    res.status(500).json({error:err})
   }
}


