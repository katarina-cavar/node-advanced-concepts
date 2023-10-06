process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const express = require('express');
const crypto = require('crypto');

const app = express();
const Worker = require('webworker-threads').Worker;

app.get('/', (req, res) => {
    const worker = new Worker(function () {
        this.onmessage = function () {
            let counter = 0;
            while (counter < 1e9) {
                counter++;
            }

            postMessage(counter);
        }
    });

    worker.onmessage = function (myCounter) {
        console.log(myCounter)
    }

    worker.postMessage();
});

app.get('/fast', (req, res) => {
    res.send('Whoa! That was fast!');
});

app.listen(3000);
