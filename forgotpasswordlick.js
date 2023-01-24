const expencedata=require('../models/data')
const jwt=require('jsonwebtoken')
const uuid = require('uuid');
const sgMail = require('@sendgrid/mail');
//const bcrypt = require('bcrypt');
const User=require('../models/userData');
require('dotenv').config()
const forgotpassword=require('../models/forgotpassword');

exports.forgotpassword=async (req,res)=>{
    try{
       let user=await User.findOne({where:{Email:req.body.Email}})
       if(user){
        const id=uuid.v4(); 
        await user.createForgotpassword({id,active:true})  
        // sgMail.setApiKey(process.env.SENGRID_API_KEY)
        // const msg = {
        //     to: email, // Change to your recipient
        //     from: 'yj.rocks.2411@gmail.com', // Change to your verified sender
        //     subject: 'Sending with SendGrid is Fun',
        //     text: 'Click on Reset password',
        //     html: `<a href="http://localhost:3000/password/resetpassword/${id}">Reset password</a>`,
        // }
        let response=res.status(201).json({link:`<a href="http://localhost:3000/password/resetpassword/${id}">Reset password</a>`})
             // let response=await sgMail.send(msg)
              return res.status(response[0].statusCode).json({message: 'Link to reset password sent to your mail ', success:true})

       }
       else{
        
        res.status(400).json({msg:'User Not found'})
       }
}
catch(err){
    console.log(err)
    res.status(500).json({msg:'Something gone wrong'})
}
}