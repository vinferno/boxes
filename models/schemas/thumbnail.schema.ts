
const mongoose = require('mongoose');

const ThumbnailSchema = mongoose.Schema({
    image: { data: Buffer, contentType: String, filename: String },
    linkedImage: {type: mongoose.Schema.Types.ObjectId, ref: 'Image'}
});

module.exports = mongoose.model('Thumbnail', ThumbnailSchema);
