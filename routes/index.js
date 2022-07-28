const express = require('express');
const authorRouter = require('./author');
const publisherRouter = require('./publisher');
const bookRouter = require('./book');

const router = express.Router();

router.use('/author', authorRouter);
router.use('/publisher', publisherRouter);
router.use('/book', bookRouter);

module.exports = router;