const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    coverPhoto: { type: String },
    images:
    {type: Array},
    categories:{
        type: String,
        enum:['Nature in Iceland','Travel Information','Reykjavik Travel Guide','History & Culture','Music in Iceland','Northern Lights Information','Best of Iceland','Itneraries','notDefined'],
        default: 'notDefined'
    }
},
    {
        timestamps: true
    });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;