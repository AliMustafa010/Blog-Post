const express = require('express');
const { 
    getAllBlogs, 
    getBlogById, 
    createBlog,
} = require('../controllers/blogControllers');

const router = express.Router();

router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.post('/blogs', createBlog); 

module.exports = router;
