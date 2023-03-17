const Order = require('../models/Order')
const createOrder = async(req,res)=>{
    //   const {name,time,email,noOfPassenger, phone, country} = req.body;
      try {
        const order = new Order ({
            ...req.body,
            
        })
        await order.save()

        res.status(200).json({msg:"SUCCESS", order})
      
      } catch (error) {
        console.log(error)
      }
}

module.exports = {
    createOrder
}