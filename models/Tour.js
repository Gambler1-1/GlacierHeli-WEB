const mongoose = require('mongoose');
const { Schema } = mongoose;

const tourSchema = new Schema({
<<<<<<< Updated upstream

    name : { type: String, required: true },

    availability:{
        type: Array,
        time:{
            type: String,
            required: true
        },
        slots:{
            type: String
        }
    },
    adultPrice :{
        type: String,
        required: true
    },
    childPrice :{
        type: String,
        required: true
    }
=======
    name: { type: String, required: true },
    availability: { type: String, required: true },
    imageUrl:
    {type: String},
  
>>>>>>> Stashed changes
},
    {
        timestamps: true
    });

const Blog = mongoose.model('Tour', tourSchema);
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
module.exports = Blog;