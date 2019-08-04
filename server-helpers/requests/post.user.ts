const mongoose = require('mongoose');
const UserModel = require("../../models/schemas/user.schema");
const Bcrypt = require("bcryptjs");
module.exports = async function (req, res, next) {
    const query = UserModel.findById(req._id);
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
