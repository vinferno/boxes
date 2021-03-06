
const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    image: { data: Buffer, contentType: String, filename: String },
    keywords: [String],
});

module.exports = mongoose.model('Image', ImageSchema);
