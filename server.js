const express = require('express');
const app = express();
const path = require('path');

var indexHtml = require('./index.html');

//app.use(express.static('public'));

app.use(express.static(__dirname + indexHtml))

app.listen(3000, () => console.log('Example app listening on port 3000!'))