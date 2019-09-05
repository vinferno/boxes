
const mongoose = require('mongoose');

const ThumbnailSchema = mongoose.Schema({
    image: { data: Buffer, contentType: String, filename: String },
    linkedImage: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'},
    keywords: [String],
});

module.exports = mongoose.model('Thumbnail', ThumbnailSchema);
