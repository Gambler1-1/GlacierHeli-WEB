const mongoose = require('mongoose');
const UserModel = require('./User');
const { Schema } = mongoose;

const tourSchema = new Schema({

    customerName : { type: String, required: true, ref:User,},
    name : { type: String, required: true },
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
},
    {
        timestamps: true
    });

const Blog = mongoose.model('Tour', tourSchema);
module.exports = Blog;