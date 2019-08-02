"use strict";
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
// Allowed extensions list can be extended depending on your own needs
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
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.port = process.env.PORT ? process.env.PORT : 5000;
        // Create expressjs application
        this.app = express();
        this.app.use(cors());
        console.log('cors');
        this.app.use(express.static(path.resolve('dist/boxes')));
        // Route our backend calls
        this.app.get('/api-users', function (req, res) {
            return res.json({ data: [] });
        });
        this.app.get('/api', function (req, res) { return res.json({ application: 'Reibo collection' }); });
        // Redirect all the other resquests
        this.app.get('*', function (req, res) {
            if (allowedExt.filter(function (ext) { return req.url.indexOf(ext) > 0; }).length > 0) {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            }
            else {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            }
        });
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
    }
    Server.bootstrap = function () {
        return new Server();
    };
    return Server;
}());
//Bootstrap the server, so it is actualy started
var server = Server.bootstrap();
exports["default"] = server.app;
