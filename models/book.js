'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Book.belongsTo(models.Author);
            Book.belongsTo(models.Publisher);
        }
    }

    Book.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Book',
        paranoid: true,
    });

    Book.afterCreate(async (book, options) => {
        try {
            await sequelize.transaction(async (t) => {
                const author = await sequelize.models.Author.findByPk(book.authorId, {transaction: t});
                author.howMany += 1;
                await author.save({transaction: t});

                const publisher = await sequelize.models.Publisher.findByPk(book.publisherId, {transaction: t});
                publisher.howMany += 1;
                await publisher.save({transaction: t});
            });
        } catch (error) {
            console.log('hata')
        }
    });

    return Book;
};