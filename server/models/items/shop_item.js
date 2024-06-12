const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_type: {
        type: String,
        enum: ['dress', 'set']
    },
    name: String,
    color: String,
    size: String,
    price: Number,
    material: String,
    imgPath: String
});

const itemModel = mongoose.model('ShopItem', itemSchema);

module.exports = itemModel;