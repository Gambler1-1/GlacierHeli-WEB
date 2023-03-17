const express = require("express");
const { getAllBlogs, createBlog, findBlog } = require("../controllers/blogController");
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.route("/allBlogs").get(getAllBlogs);
router.route("/allBlogs/:id").get(findBlog);
router.post('/blogs', upload.array('blogImages',10) ,createBlog);


module.exports = router