const path=require('path')
const rootDir=require('../utl/path');

exports.contactus=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))

}