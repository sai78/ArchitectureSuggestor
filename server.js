const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const insertModule = require('./mongodb');

//Middlewares
app.use('/public', express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    return res.sendFile(path.resolve('index.html'))
})
app.post('/',function(req ,res){
    let data = JSON.parse(req.body.data);
    let questionEntityMappingObj = data.questionEntityMappingObj;
    let questionDetailsObj = data.questionDetailsObj;
    let architectureDetailsObj = data.architectureDetailsObj; 
    insertModule.insertData(questionEntityMappingObj,questionDetailsObj,architectureDetailsObj);
}) 
app.listen(3000, function () {
    console.log('server running at localhost:3000')
})