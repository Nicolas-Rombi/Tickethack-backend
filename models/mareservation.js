const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

const MyBooking = mongoose.model('myBookings', BookingSchema);

module.exports = MyBooking;