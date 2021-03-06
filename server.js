var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port);

console.log('server started '+ port);
