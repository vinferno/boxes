const mongoose = require('mongoose');
const path = require('path');
const ImageModel = require(path.resolve('models/schemas/image.schema.ts'));
const Bcrypt = require("bcryptjs");
module.exports = async function (req, res, next) {
    console.log('post.image', req.body);
    const query = ImageModel.findById(req.body._id);
    console.log(req.body._id);
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
