const expencedata=require('../models/data')


exports.addData=async (req,res,next)=>{
      try{
        if(!req.body.amount){
            res.status(400).json({err:' amount is missing'})
        }
        const amount=req.body.amount
        const description=req.body.description
        const category=req.body.category   
         
     data=await expencedata.create({amount:amount,description:description,category:category})
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
        data=await expencedata.findAll()
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