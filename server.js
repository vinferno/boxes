"use strict";
// IMPORTS
// region helper
exports.__esModule = true;
require("es6-shim");
require("reflect-metadata");
var path = require("path");
var bodyParser = require("body-parser");
var moment = require("moment");
var fs = require('fs');
var dirs = fs.readdirSync(path.resolve('./'));
console.log(dirs);
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();
// endregion
var db_uri = "mongodb://" + process.env.DBUSER + ":" + process.env.DBPASS + "@ds259207.mlab.com:59207/artboxes";
console.log(db_uri);
// region Allowed extensions list can be extended depending on your own needs
var allowedExt = [
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
var Server = /** @class */ (function () {
    // endregion
    function Server() {
        var _this = this;
        this.port = process.env.PORT ? process.env.PORT : 5000;
        this.mongoose = mongoose;
        // region MiddleWare
        this.app = express();
        this.app.use(cors());
        this.app.use(express.static(path.resolve('dist/boxes')));
        this.app.use(bodyParser.json());
        // endregion
        // region Database Config
        console.log('dbPass', process.env.DBPASS);
        this.mongoose.connect(db_uri, { useNewUrlParser: true });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () { console.log('Connected to database was successful!'); });
        // endregion
        // Route our backend calls
        var files = fs.readdirSync(path.resolve('./server-helpers/requests'));
        console.log('requests', files);
        files.forEach(function (file) {
            var f = require('./server-helpers/requests/' + file);
            var split = file.split('.');
            console.log("/api/" + split[1]);
            _this.app[split[0]]("/api/" + split[1], f);
        });
        // this.app.get('/api-users', (req, res) => {
        //     return res.json({ data: [] });
        // });
        // this.app.get('/api', (req, res) => res.json({ application: 'Reibo collection' }));
        // region Serve index.html
        // Redirect all the other resquests
        this.app.get('*', function (req, res) {
            if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            }
            else {
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
        this.app.listen(this.port, function () { return console.log("http is started " + _this.port); });
        // Catch errors
        this.app.on('error', function (error) {
            console.error(moment().format(), 'ERROR', error);
        });
        process.on('uncaughtException', function (error) {
            console.log(moment().format(), error);
        });
        // endregion server config
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
// region serve
//Bootstrap the server, so it is actualy started
var server = Server.bootstrap();
exports["default"] = server.app;
// endregion serve
