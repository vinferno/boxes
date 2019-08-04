const mongoose = require('mongoose');
const UserModel = require("../../models/schemas/user.schema");
const Bcrypt = require("bcryptjs");
module.exports = async function (req, res, next) {
    console.log('post users was called');
    console.log('req.body', req.body);

    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    console.log('after', req.body);
    var user = new UserModel(req.body);

    const query =  user.save();
    console.log(query instanceof mongoose.Query); // true
    const docs = await query; // Get the do
    res.json(docs);
};
