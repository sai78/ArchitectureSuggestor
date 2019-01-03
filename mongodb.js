const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const insertModule = (() => {

    let counter = 1 , insertCounter1 = 1 , insertCounter2 = 1 , insertCounter3 = 1 ;
    const insertDataIntoDB = (questionEntityMappingObj, questionDetailsObj, architectureDetailsObj) => {
        let myobj = questionEntityMappingObj;
        let myobj1 = questionDetailsObj;
        let myobj2 = architectureDetailsObj;
        mongodb.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            let dbo = db.db("AzureTemplate");
            
            if(counter == 1)
            {
            dbo.createCollection("questionEntityMappingCollection");
            dbo.createCollection("questionDetailsCollection");
            dbo.createCollection("architectureDetailsCollection");
            counter += 1;
            }

            if(insertCounter1 == 1)
              {
                dbo.collection("questionEntityMappingCollection").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("questionEntityMappingCollection document inserted");
                });
                insertCounter1 += 1;
            }
            else {
                dbo.collection("questionEntityMappingCollection").remove();
                dbo.collection("questionEntityMappingCollection").insertOne(myobj, function (err, res) {
                    if (err) throw err;
                    console.log("questionEntityMappingCollection document Updated");
                });
            }
            if (insertCounter2 == 1) {
                dbo.collection("questionDetailsCollection").insertOne(myobj1, function (err, res) {
                    if (err) throw err;
                    console.log("questionDetailsCollection document inserted");
                });
                insertCounter2 += 1;
            }
            else {
                dbo.collection("questionDetailsCollection").remove();
                dbo.collection("questionDetailsCollection").insertOne(myobj1, function (err, res) {
                    if (err) throw err;
                    console.log("questionDetailsCollection document Updated");
                });
            }
            if (insertCounter3 == 1) {
                dbo.collection("architectureDetailsCollection").insertOne(myobj2, function (err, res) {
                    if (err) throw err;
                    console.log("architectureDetailsCollection document inserted");
                    db.close();
                });
                insertCounter3 += 1; 
            }
            else {
                dbo.collection("architectureDetailsCollection").remove();
                dbo.collection("architectureDetailsCollection").insertOne(myobj2, function (err, res) {
                    if (err) throw err;
                    console.log("architectureDetailsCollection document Updated");
                    db.close();
                });
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