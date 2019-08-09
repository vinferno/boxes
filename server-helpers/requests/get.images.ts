const mongoose = require('mongoose');
const path = require('path');
const ThumbnailModel = require(path.resolve('models/schemas/thumbnail.schema.ts'));

module.exports = async function (req, res, next) {
    console.log('get.images');
    const query = ThumbnailModel.find();
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
