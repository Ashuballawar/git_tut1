const Razorpay=require('razorpay');
const Order = require('../models/orders');


exports.purchasepremium=async (req,res,next)=>{
   try{   console.log(process.env.RAZORPAY_KEY_ID)
     var rzp=new Razorpay({
        key_id:'rzp_test_xGMChus3zzjzHA' ,  //      process.env.RAZORPAY_KEY_ID  
        key_secret:'OCauhHMYW62hM8RGrpeHtuW5'  //   process.env.RAZORPAY_KEY_SECRET
      })
   const amount=2500;
   rzp.orders.create({amount,currency:"INR"},(err,order)=>{
           if(err){
            throw new Error(err)
           }
           req.user.createOrder({orderid:order.id,status:'PENDING'})
           .then(()=>{
          return res.status(201).json({order,key_id:rzp.key_id}) })
         .catch(err=>{
          throw new Error(err)
})                          
   })

   }
   catch(err){
    console.log(err)
           res.status(500).json({msg:err})
   }
}

exports.updateTransactionStatus=(req,res,next)=>{
    try{
     const {payment_id,order_id}=req.body
     Order.findOne({where:{orderid:order_id}}).then(order=>{
        order.update({paymentid:payment_id,status:"SUCCESSFULL"}).then(()=>{
            req.user.update({ ispremiuruser:true}).then(()=>{
                return res.status(202).json({success:true,message:"Transaction Successfull"})
            }).catch((err)=>{
                throw new Error(err)
            })
        }).catch((err)=>{
            throw new Error(err)
        })
     }).catch((err)=>{
        throw new Error(err)
     })


    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

exports.updateTransactionfailed=(req,res,next)=>{
    try{
     const {payment_id,order_id}=req.body
     Order.findOne({where:{orderid:order_id}}).then(order=>{
        order.update({paymentid:payment_id,status:"failed"}).then(()=>{
            req.user.update({ ispremiuruser:false}).then(()=>{
                return res.status(202).json({success:false,message:"Transaction Failed"})
            }).catch((err)=>{
                throw new Error(err)
            })
        }).catch((err)=>{
            throw new Error(err)
        })
     }).catch((err)=>{
        throw new Error(err)
     })


    }
    catch(err){
        res.status(500).json({msg:err})
    }
}