const mongoose = require('mongoose');
const UserModel = require("../../models/schemas/user.schema");
const Bcrypt = require("bcryptjs");
module.exports = async function (req, res, next) {
    console.log('post.user', req.body);

    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    console.log('after', req.body);
    const user = new UserModel(req.body);
    user.save(function(err){
        console.log('user', user);
        res.json(user);
    })

};
