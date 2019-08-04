const mongoose = require('mongoose');
const UserModel = require("../../models/schemas/user.schema");

module.exports = async function (req, res, next) {
    const query = UserModel.find();
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
