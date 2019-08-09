const mongoose = require('mongoose');
const UserModel = require("../../models/schemas/user.schema");
const Bcrypt = require("bcryptjs");
module.exports = async function (req, res, next) {
    console.log('post.user', req.body);
    const query = UserModel.findById(req.body._id);
    console.log(req.body._id);
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
