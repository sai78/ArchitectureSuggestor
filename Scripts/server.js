const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
let questionObj = questionOptionsModule();
let questionObjValue = questionObj.questionDetailsObj;

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
   // var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(questionObjValue, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      console.log(res.ops)
      db.close();
    });
  });