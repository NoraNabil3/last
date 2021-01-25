const Blogs = require('../models/Blogs');

const create = (blogs) => Blogs.create(blogs);

const getAll = (query) => Blogs.find(query).exec();

const getById = (id) => Blogs.findById(id).exec();

const editOne = (id, body) => Blogs.findByIdAndUpdate(id, body, { new: true }).exec();

module.exports = {
    create,
    getAll,
    getById,
    editOne,
};