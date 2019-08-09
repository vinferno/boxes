const mongoose = require('mongoose');
const path = require('path');
const ImageModel = require(path.resolve('models/schemas/image.schema.ts'));
const ThumbnailModel = require(path.resolve('models/schemas/thumbnail.schema.ts'));
const fs = require('fs');
const imageThumbnail = require('image-thumbnail');


module.exports = async function (req, res, next) {
    var newPic = new ImageModel();
    var newThumb = new ThumbnailModel();
    newPic.image.data = fs.readFileSync(req.file.path);
    newThumb.image.data = await imageThumbnail( newPic.image.data);
    console.log(newThumb)
    newPic.image.contentType = req.file.mimetype;
    newPic.image.filename = req.file.filename;
    newThumb.image.contentType = req.file.mimetype;
    newThumb.image.filename = req.file.filename;
    newPic.save(function(err){
        console.log('new Pic', newPic._id);
        newThumb.linkedImage = newPic._id;
        newThumb.save(function(err2){
            res.json(newPic);
        });
        fs.unlink(req.file.path, (err) => {
            if (err) throw err;
            console.log(req.file.path, 'was deleted');
        });
    })
};
