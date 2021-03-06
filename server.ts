// IMPORTS
// region helper

import 'es6-shim';
import 'reflect-metadata';
import { Request, Response } from 'express-serve-static-core';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as moment from 'moment';
const fs = require('fs');
const dirs = fs.readdirSync(path.resolve('./'));
console.log(dirs);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config ();
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('req', req);
        cb(null, 'uploads/profile_images')
    },
    filename: (req, file, cb) => {
        console.log(req);
        console.log('req.body', req.body);
        console.log(file);
        // get the original name + the date + the extention
        console.log('new name', path.basename(file.originalname, path.extname(file.originalname)) + '.' + Date.now() + '.' + path.extname(file.originalname));
        cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '.' + Date.now() + '.' + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage });

// endregion




const db_uri = `mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds259207.mlab.com:59207/artboxes`;
console.log(db_uri);

// region Allowed extensions list can be extended depending on your own needs
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
// endregion
class Server {

    // region Member Config
    public app: any;
    private port = process.env.PORT ? process.env.PORT : 5000;
    public mongoose = mongoose;

    public static bootstrap(): Server {
        return new Server();
    }

    // endregion

    constructor() {

        // region MiddleWare
        this.app = express();
        this.app.use(cors());
        this.app.use(express.static(path.resolve('dist/boxes')));
        this.app.use(bodyParser.json());

        // endregion

        // region Database Config
        console.log('dbPass', process.env.DBPASS);
        this.mongoose.connect(db_uri, { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:')); db.once('open', function() { console.log('Connected to database was successful!') });

        // endregion


        // Route our backend calls

        const files = fs.readdirSync(path.resolve('./server-helpers/requests'));
        console.log('requests', files);
        files.forEach( file => {
            const f = require('./server-helpers/requests/' + file );
            const split = file.split('.');
            console.log(`/api/${split[1]}`);
            if (file !== 'post.upload.ts') {
                this.app[split[0]](`/api/${split[1]}`, f);
            } else {

                this.app[split[0]](`/api/${split[1]}`, upload.single('upload'),f);
            }
        });


        // this.app.get('/api-users', (req, res) => {
        //     return res.json({ data: [] });
        // });
        // this.app.get('/api', (req, res) => res.json({ application: 'Reibo collection' }));


        // region Serve index.html
        // Redirect all the other resquests
        this.app.get('*', (req: Request, res: Response) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            } else {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            }
        });
        // endregion




        // region server config
        // Depending on your own needs, this can be extended
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.raw({ limit: '50mb' }));
        this.app.use(bodyParser.text({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({
            limit: '50mb',
            extended: true
        }));

        // Start the server on the provided port
        this.app.listen(this.port, () => console.log(`http is started ${this.port}`));

        // Catch errors
        this.app.on('error', (error: any) => {
            console.error(moment().format(), 'ERROR', error);
        });
        this.app.use(function (err, req, res, next) {
            console.log('This is the invalid field ->', err.field)
            next(err)
        });


        process.on('uncaughtException', (error: any) => {
            console.log(moment().format(), error);
        });

        // endregion server config
    }


}


// region serve
//Bootstrap the server, so it is actualy started
const server = Server.bootstrap();
export default server.app;
// endregion serve
