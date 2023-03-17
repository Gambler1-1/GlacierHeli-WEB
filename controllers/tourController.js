const cloudinary = require('cloudinary').v2;
const Tour = require('../models/Tour');


const createTour = async(req,res)=>{

    const {name, adultPrice , childPrice , time } = req.body;
    // time.foreach(()=>{
    //     console.log(time,"TIME")
    // })
    var availability=[];
       
    for(i=0; i<time.length ; i++){
        console.log(time[i])
        availability.push({time:time[i], slots:5})
    }

    

   try {
   
    const tour = new Tour({ ...req.body,  availability,
        // name: req.body.name,
        // adultPrice: req.body.adultPrice,
        // childPrice: req.body.childPrice,
      });
    //   console.log(tour,'NEW TOUR')
      return res.status(200).json({tour})

    
   } catch (error) {
    console.log(error)
   }

}

module.exports = {
    createTour,
}

