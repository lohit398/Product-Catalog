const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    InStock: {
        type: Boolean,
        required: true,
    },
    Image_URL: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Product', productSchema);
