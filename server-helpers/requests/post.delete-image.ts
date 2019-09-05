const mongoose = require('mongoose');
const path = require('path');
const ImageModel = require(path.resolve('models/schemas/image.schema.ts'));
const ThumbnailModel = require(path.resolve('models/schemas/thumbnail.schema.ts'));
module.exports = async function (req, res, next) {
    console.log('post.image', req.body);
    const query = ImageModel.findById(req.body._id);
    console.log(req.body._id);
    console.log(query instanceof mongoose.Query); // true
    await query.remove().exec(); // Get the do

    const thumb = ThumbnailModel.find({'linkedImage': req.body._id});
    console.log('deleted image', thumb);
    await thumb.remove().exec(); // Get the do
    res.json({query: !!(query), thumb: !!(thumb)})
};
