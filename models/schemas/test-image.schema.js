var mongoose = require('mongoose');
var TestImageSchema = new mongoose.Schema({
    data: String,
    contentType: String,
    orientation: Number,
    name: String,
    exif: Number
});
module.exports = mongoose.model('Image', TestImageSchema);
