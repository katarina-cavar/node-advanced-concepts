process.env.UV_THREADPOOL_SIZE = 1;
const crypto = require('crypto');
const cluster = require('cluster');
const express = require('express');
const app = express();

if (cluster.isMaster) {
    console.log('Master process');
    cluster.fork()
} else {
    console.log('Child process')
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send("Hi there! You've reached root crypto message");
        });
    });
    app.get('/fast', (req, res) => {
        res.send("Hi there! You've reached 'fast'");
    });

    app.listen(3000);
}
