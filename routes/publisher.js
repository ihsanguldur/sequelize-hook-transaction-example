const express = require('express');
const create = require('../handlers/publisher');

const router = express.Router();

router.post('/', create);

module.exports = router;