const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
},{
    timestamps: true
})

const Products = mongoose.model('Products',productSchema);
module.exports = Products;