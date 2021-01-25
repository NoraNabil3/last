const express = require('express');
const {
    create,
    getAll,
    getById,
    editOne,
} = require('../controllers/blogs');

const router = express.Router();

router.post('/', async(req, res, next) => {
    const { body, user: { id } } = req;
    try {
        const blogs = await create({...body, userId: id });
        res.json(blogs);
    } catch (e) {
        next(e);
    }
});

router.get('/', async(req, res, next) => {
    const { user: { id } } = req;
    try {
        const blogss = await getAll({ userId: id });
        res.json(blogss);
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async(req, res, next) => {
    const { params: { id } } = req;
    try {
        const blogss = await getById(id);
        res.json(blogss);
    } catch (e) {
        next(e);
    }
});

router.patch('/:id', async(req, res, next) => {
    const { params: { id }, body } = req;

    try {
        const blogss = await editOne(id, body);
        res.json(blogss);
    } catch (e) {
        next(e);
    }
});

module.exports = router;