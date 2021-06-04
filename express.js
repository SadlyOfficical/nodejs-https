const fs = require('fs');

const privateKey = fs.readFileSync('../pem/key.pem', 'utf8');

const certificate = fs.readFileSync('../pem/cert.prm', 'utf8');

const ca = fs.readFileSync('../pem/ca.pem', 'utf8');

const credentials = {
    key: privatekey,
    cert: certificate,
    ca: ca
};

const https = require('https');

var express = require('express');

var app = express();

var server = https.createServer(app);

const httpsServer = https.createserver(credentials, app);

var port = 443;

app.use(express.static('public');

app use((req, res) => res.sendfile(`${__dirname}/public/index.html`));

httpsServer.listen(port, () => {
    console.log(''HTTPS Server Is Currently running On port 443');
})