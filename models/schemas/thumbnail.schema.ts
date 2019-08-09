
const mongoose = require('mongoose');

const ThumbnailSchema = mongoose.Schema({ image:
        { data: Buffer, contentType: String, filename: String }
});

module.exports = mongoose.model('Thumbnail', ThumbnailSchema);
