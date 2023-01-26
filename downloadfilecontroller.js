const expencedata=require('../models/data')
const jwt=require('jsonwebtoken')
const AWS=require('aws-sdk')
const user=require('../models/userData');
const UserService=require('../services/userservices')
const uploadtos3=require('../services/s3services')
const fileList=require('../models/filelist')
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
   
   
   try{
       
        const amount=req.body.amount
        const description=req.body.description
        const category=req.body.category   
      
     data=await req.user.createExpencedatum({amount:amount,description:description,category:category})
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
        data=await expencedata.findAll({where:{userdatumId:req.user.id}})
        let listOfDowloadedfile=await req.user.getFileLists();   
      //   listOfDowloadedfile.forEach(element => {
      //    console.log(element.dataValues)
      //  });    
        console.log('successfully sendData') 
       // console.log({data,list:listOfDowloadedfile})
         res.status(200).json({data,listOfDowloadedfile})
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
    data=await expencedata.destroy({where:{id:req.params.id,userdatumId:req.user.id}})
     if(data===1){
      console.log('successfully deleted') 
      res.status(200).json(data) 
     }
     else{
  
    return res.status(400).json({msg:"wrong input"}) 
      
   }}
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
    data=await expencedata.findAll({where:{id:req.params.id,userdatumId:req.user.id}})
    console.log('successfully sendData') 
    res.status(200).json(data[0])  
   }
   catch(err){
    console.log(err)
    res.status(500).json({error:err})
   }
}
    
exports.downloadexpence=async (req,res)=>{
   try{
      const expenceData=await UserService.getExpences(req)
      arrayOfData=[]
      expenceData.forEach(element => {
         arrayOfData.push({amount:element.dataValues.amount,description:element.dataValues.description,category:element.dataValues.category,time:element.dataValues.createdAt})
     });
     let stringifiedExpence=JSON.stringify(arrayOfData)
     let filename=`Expense${req.user.id}/${new Date()}.txt`
     let fileURL=await uploadtos3.uploadToS3(stringifiedExpence,filename);
      let fileName=await req.user.createFileList({fileName:filename,})

    //let listOfFile=await req.user.getFileLists()
       
     res.status(200).json({fileURL,success:true,fileName:fileName})
   }
   catch(err){
      console.log(err)
      res.status(500).json({err:err,success:false})
   }
   }
 
