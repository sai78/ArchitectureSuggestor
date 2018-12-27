const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
let data= {}

//Middlewares
app.use('/public', express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    return res.sendFile(path.resolve('index.html'))
})

app.get('/api', function (req, res) {
    return res.send(data);
})

app.post('/api', function (req, res) {
    data = req.body;
    console.log(data)
})

app.listen(3000, function () {
    console.log('server running at localhost:3000')
})