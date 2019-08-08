const mongoose = require('mongoose');
const TestImage = require("../../models/schemas/test-image.schema");

module.exports = async function (req, res, next) {
    console.log('called get images');
    const query = TestImage.find();
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
