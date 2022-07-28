const express = require('express');
const {create} = require('../handlers/book');

const router = express.Router();

router.post('/', create);

module.exports = router;