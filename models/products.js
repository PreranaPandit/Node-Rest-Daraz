const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String
    }


}, { timestamps: true });

module.exports = mongoose.model('Product', productsSchema);