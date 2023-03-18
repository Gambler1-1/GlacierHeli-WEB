const cloudinary = require('cloudinary').v2;
const Blog = require('../models/Blog');


cloudinary.config({
    cloud_name: 'dqwcmfune',
    api_key: '573315916143762',
    api_secret: 'S688cThawqZ0zL1JqSTWLE8xKls'
});

exports.getAllBlogs = async (req, res) => {
    res.json(await Blog.find({}))
}

exports.findBlog = async (req, res) => {
    const { id } = req.params;
    res.json(await Blog.findById(id))
}

exports.createBlog = async (req, res) => {
    var images =[];
    try {
          
            const uploadedImages = await Promise.all(
              req.files.map((file) => cloudinary.uploader.upload(file.path))
            );
                    for(let i=0; i<uploadedImages.length; i++) {
                // console.log(uploadedImages[i].secure_url)
                images.push(uploadedImages[i].secure_url)
            }

            // console.log(images,'IMGES ARRAY')
        
          
        // const result = await cloudinary.uploader.upload(req.file.path);
        const { title, content, author } = req.body;

        const blog = new Blog({
            title,
            content,
            author,
            // coverPhoto: result.secure_url,
            images: images
            
        });
        console.log(blog,"BLOG");

        await blog.save();

        res.json(blog);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};
