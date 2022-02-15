/*var url = require('url');
var fs = require('fs');

function renderhtml(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write("file not found");
        } else {
            res.write(data);
        }
        res.end();
    });
}
module.exports = {
    handleRequest: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var path = url.parse(req.url);
        switch (path) {
            case '/':
                renderhtml('./index.html', res);
                break;
            case '/contact':
                renderhtml('./contact.html', res);
                break;
            case '/about':
                renderhtml('./about.html', res);
                break;
            case '/blog':
                renderhtml('./blog.html', res);
                break;
            case '/services':
                renderhtml('./services.html', res);
                break;
            case '/login':
                renderhtml('./login.html', res);
                break;
            case '/admin':
                renderhtml('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write("route not defined");
                res.end();

        }

    }
}; */
const express = require("express");
const path = require('path');
const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
});

app.get('/about', (req, res) => { //here you can include a new "about" route that should take you to the "about" page
    res.render('about')
});

app.use(express.static('public'));

app.listen(3000);