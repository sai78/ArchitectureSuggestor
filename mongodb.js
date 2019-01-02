const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const insertModule = (() => {

    const insertDataIntoDB = (questionEntityMappingObj, questionDetailsObj, architectureDetailsObj) => {
        mongodb.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            let dbo = db.db("Azure");
            let myobj = questionEntityMappingObj;
            let myobj1 = questionDetailsObj;
            let myobj2 = architectureDetailsObj;
            if (dbo.collection("questionEntityMappingCollection").count() == 0) {
                dbo.collection("questionEntityMappingCollection").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("questionEntityMappingCollection document inserted");
                });
            }
            else {
                dbo.collection.save();
            }
            if (dbo.collection("questionDetailsCollection").count() == 0) {
                dbo.collection("questionDetailsCollection").insertOne(myobj1, function (err, res) {
                    if (err) throw err;
                    console.log("questionDetailsCollection document inserted");
                });
            }
            else {
                dbo.collection.save();
            }
            if (dbo.collection("architectureDetailsCollection").count() == 0) {
                dbo.collection("architectureDetailsCollection").insertOne(myobj2, function (err, res) {
                    if (err) throw err;
                    console.log("architectureDetailsCollection document inserted");
                    db.close();
                });
            }
            else {
                dbo.collection.save();
            }
        });
    }
    return {
        insertData(questionEntityMappingObj, questionDetailsObj, architectureDetailsObj) {
            insertDataIntoDB(questionEntityMappingObj, questionDetailsObj, architectureDetailsObj);
        }
    }
})()
module.exports = insertModule;