const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
})

const Trip = mongoose.model('trips',TodoSchema)

module.exports = Trip;