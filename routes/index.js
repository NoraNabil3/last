const express = require('express');
const blogs = require('./blogs');
const user = require('./user');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
router.use('/users', user);
router.use('/blogss', authMiddleware, blogs);

module.exports = router;