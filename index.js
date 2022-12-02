const cluster = require('cluster');
const express = require('express');
const app = express();

function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
}

if (cluster.isMaster) {
    console.log('Master process');
    cluster.fork()
} else {
    console.log('Child process')
    app.get('/', (req, res) => {
        doWork(5000);
        res.send("Hi there! Katarina");
    });
    app.get('/fast', (req, res) => {
        res.send("Hi there! Katarina");
    });

    app.listen(3000);
}
