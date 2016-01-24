var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    paypal: String,
    songs: []
});

module.exports = mongoose.model('Album', albumSchema);
