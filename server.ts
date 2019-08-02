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


// Allowed extensions list can be extended depending on your own needs
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

class Server {
    public app: any;
    private port = process.env.PORT ? process.env.PORT : 5000;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        // Create expressjs application
        this.app = express();
        this.app.use(express.static(path.resolve('dist/boxes')));
        // Route our backend calls
        this.app.get('/api', (req, res) => res.json({ application: 'Reibo collection' }));

        // Redirect all the other resquests
        this.app.get('*', (req: Request, res: Response) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.resolve('dist/boxes/index.html'));
            } else {
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
        this.app.listen(this.port, () => console.log(`http is started ${this.port}`));

        // Catch errors
        this.app.on('error', (error: any) => {
            console.error(moment().format(), 'ERROR', error);
        });

        process.on('uncaughtException', (error: any) => {
            console.log(moment().format(), error);
        });
    }
}

//Bootstrap the server, so it is actualy started
const server = Server.bootstrap();
export default server.app;
