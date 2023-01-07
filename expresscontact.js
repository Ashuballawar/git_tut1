const express=require('express');

const path=require('path')
const router=express.Router();
const rootDir=require('../utl/path');
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))

})
router.post('/success',(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(rootDir,'views','sucees.html'))
    
})

    module.exports=router;

            




