const db = require('dotenv').config();
console.log(process.env.DB_HOST);

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017", function(err, client) {
  if(err) {
    return console.dir(err);
  }
  const db = client.db('test');
  var collection = db.collection('test');
  // var doc1 = {'hello':'doc1'};
  // var doc2 = {'hello': 'doc2'};
  // var lotsOfDocs = [{'hello':'doc3'},{'hello':'doc4'}];

  // collection.insert(doc1);
  // collection.insert(doc2, {w:1}, function(err, result){});
  // collection.insert(lotsOfDocs, {w:1}, function(err, result){});
  //var id= new ObjectId("5a99906a98ffa7225c58c139");
  collection.update({"_id":ObjectId('5a99906a98ffa7225c58c139')},{$set:{"hello":"su"}},{w:1}, function(err,res){
    console.log(res._id);
  });

  client.close();
});