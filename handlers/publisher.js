const {Publisher} = require('../models');
const asyncHandler = require('express-async-handler');
const CustomError = require('../utils/CustomError');
const {successPresenter} = require("../utils/presenter");

const create = asyncHandler(async (req, res, next) => {
    let {name} = req.body;

    name = name.trim();
    if (!name) {
        return next(new CustomError(400, 'Name is Required.'));
    }

    const publisher = await Publisher.create({name});

    successPresenter(res, 'Publisher Created.', publisher);
});

module.exports = create;