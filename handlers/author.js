const {Author} = require('../models');
const asyncHandler = require('express-async-handler');
const CustomError = require('../utils/CustomError');
const {successPresenter} = require("../utils/presenter");

const create = asyncHandler(async (req, res, next) => {
    let {firstName, lastName} = req.body;

    firstName = firstName.trim();
    lastName = lastName.trim();
    if (!firstName || !lastName) {
        return next(new CustomError(400, 'First Name and Last Name are Required.'));
    }

    const author = await Author.create({firstName, lastName});

    successPresenter(res, 'Author Created.', author);
});

module.exports = create;