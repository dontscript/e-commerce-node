const express = require('express');
const router = express.Router();
const config = require('./config/default');

const jwt = require('jsonwebtoken');
const md5 = require('md5');

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to API' });
});

module.exports = router;