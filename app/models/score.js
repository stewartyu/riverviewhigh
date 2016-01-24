var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    key: String,
    paypal: String,
    ranges: [
        {
            name: String,
            range: String
        }
    ]
});

module.exports = mongoose.model('Score', scoreSchema);
