const express = require('express');
const create = require('../handlers/author');

const router = express.Router();

router.post('/', create);

module.exports = router;
