const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const api = express();

api.use(express.json());
api.use('/api', routes);
api.use(errorHandler);

const PORT = process.env.PORT || 5000;
api.listen(PORT, () => {
    console.log('Server Started on ' + PORT)
});


