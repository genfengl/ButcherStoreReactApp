const mongoose = require('mongoose')

const MeatSchema = new mongoose.Schema({

    title: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, min: 0, required: true },
    stock: { type: Number, min: 0, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true},
    likes: [ {type: mongoose.Schema.Types.ObjectId, ref: 'User'} ]
})

const Meat = mongoose.model('Meat', MeatSchema)

module.exports = Meat




