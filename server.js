const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

//Middlewares
app.use('/public', express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    return res.sendFile(path.resolve('index.html'))
})
app.post('/getDetails',function(req ,res){
 console.log(res);  
})
app.listen(3000, function () {
    console.log('server running at localhost:3000')
})