const fs = require('fs');
const path = require('path');




const TestImage = require("../../models/schemas/test-image.schema");
module.exports = async function( req, res ) {
    const nImage = new TestImage();
    // nImage.data = fs.readFileSync(req.file.path);
    // nImage.contentType = req.file.mimetype;
    // nImage.save(function (err, imageInstance) {
    //     console.log('done');
    // });
    // res.json( {hello: 2} )
    console.log(req.file);
    nImage.data = fs.readFileSync(req.file.path, 'utf8');
    nImage.contentType = req.file.originalname;
    nImage.save ( ( err, imageInstance ) => {
        console.log ( 'err', err );
        fs.unlink ( req.file.path , err => {
            if (err) {
                console.log(err)
            } else {
                res.json ( imageInstance );
            }});
    } );
};
