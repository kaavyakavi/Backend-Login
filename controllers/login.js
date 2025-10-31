const LoginModel = require('../models/login');

exports.getLogin = async (req, res) => {
    const blogs = await LoginModel.find();
    res.json(blogs);
};

exports.postLogin = async (req, res) => {

    const { username } = req.body;
    const { password } = req.body;
    const { time } = req.body;

    const blog = new LoginModel({
        username, password, time
    });

    const createdBlog = await blog.save();
    res.status(201).json({
        blog: {
            ...createdBlog._doc,
        },
    });

};