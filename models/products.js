const mongoose = require('mongoose');

const pschema= new mongoose.Schema({

    item:{
        type:String,
        require:true
    }
    
    });

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
    },
    item:{
        type:String,
        required:true
    },

    product:[pschema]
},{timestamps:true}
);

module.exports = mongoose.model('Product', productsSchema);