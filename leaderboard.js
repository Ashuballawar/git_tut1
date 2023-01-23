const expencedata=require('../models/data')
const jwt=require('jsonwebtoken')

const user=require('../models/userData');
const { NULL } = require('mysql2/lib/constants/types');

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

exports.leaderborad=async(req,res,next)=>{
   try{
       let temp=[];
       let Expence=0;
          data=await expencedata.findAll();
          allUser=await user.findAll();
          
          allUser.forEach(user => {
            data.forEach(edata => {
                if(edata.userdatumId===user.id){
                  
                  
                  if(!temp[user.id]){
                    
                  temp[user.id]={Name: user.Name,Expence:0+edata.amount}}
                  else{
                   
                     temp[user.id]={Name: user.Name,Expence:temp[user.id].Expence+edata.amount}}
                  }
                  else{
                     if(!temp[user.id]){
                    
                        temp[user.id]={Name: user.Name,Expence:0}}
                        else{
                         
                           temp[user.id]={Name: user.Name,Expence:temp[user.id].Expence}}
                        }
                    
                  })
                 
                    

                })
                let temp1=[]
        for(let i=0;i<temp.length;i++){
         if(temp[i]==null){
            continue;
         }
         temp1.push(temp[i]);
        }
     
      temp1.sort((a, b) => b.Expence - a.Expence)

           console.log(temp1)  
       res.status(200).json(temp1)
      
   }
   catch(err){
     console.log(err);
     res.status(500).json({message:'something went wrong'})
   }


}
