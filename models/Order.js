const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    name : { type: String, required: true },
    date : { type: String, required: true },
    noOfPassengers : { type: String, required: true },
    time : { type: String, required: true },
    email : { type: String, required: true },
    phone : { type: String, required: true },
    country : { type: String, required: true },
},
    {
        timestamps: true
    });

const Blog = mongoose.model('Order', orderSchema);
module.exports = Blog;