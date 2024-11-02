const Blog = require('../models/blogSchema');

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.send({ count: blogs.length, data: blogs });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Something Went Wrong" });
    }
};

const getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id);
        if (!blog) return res.status(404).send({ message: "Blog not found" });
        res.send(blog);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Something Went Wrong" });
    }
};

const createBlog = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const newBlog = new Blog({ title, description, image });
        const savedBlog = await newBlog.save();
        res.status(201).send(savedBlog);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Something Went Wrong" });
    }
};


module.exports = { getAllBlogs, getBlogById, createBlog};
