const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();

         res.status(200).send({status: 'ok'});
    } catch (err) {
        return res.status(400).send({error: ':('});
    }
});

module.exports = (app) => app.use("/blog", router);