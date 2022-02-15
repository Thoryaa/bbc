const server = require('http');
const urlmodule = require('url');
const fs = require('fs');

const urlmodul = require('./server');
const file = (fileName) => {
    return fs.createReadStream(fileName, 'utf-8');
}
server.createServer((req, res) => {
    if (req.url.startsWith('/style.css')) {
        res.setHeader('Content-Type', 'text/css');
        const file = fs.createReadStream('style.css', 'utf-8 ');
        file.pipe(res);
    } else {
        res.write(html);
        res.end();
    }

})