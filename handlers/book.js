const {Book} = require('../models');
const asyncHandler = require('express-async-handler');
const CustomError = require('../utils/CustomError');
const {successPresenter} = require("../utils/presenter");

const create = asyncHandler(async (req, res, next) => {
    let {name, price, authorId, publisherId} = req.body;

    name = name.trim();
    if (!name || !price || !authorId || !publisherId) {
        return next(new CustomError(400, 'Name, Price, Author and Publisher are Required.'));
    }

    const book = await Book.create({...req.body});

    successPresenter(res, 'Book Created.', book);

});

module.exports = {create};