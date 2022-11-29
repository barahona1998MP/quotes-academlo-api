const { DataTypes } = require('sequelize')
const db = require('../utils/databases')

/* 
{
    id: 1,
    author: 'Marcos',
    quote: 'Dudas?'
    year: 2022
}
*/

const Quotes = db.define('quotes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    year: {
        type: DataTypes.INTEGER,
    }

}, {
    timestamps: false
})

module.exports = Quotes