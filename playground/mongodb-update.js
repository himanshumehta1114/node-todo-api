// const MongoClient = require('mongodb').MongoClient;

// ObjectID lets us create object id's on the fly
const {MongoClient, ObjectID} = require('mongodb'); // this is object destructuring from ES6

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongo server');

  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('59f5709e2011883316917f59')},{
      $set : {
      name : 'Mohit Singh' },

      $inc : {
        age : 5
      }
  },{
      returnOriginal: false
    }).then((results) => {
      console.log(results);
    });
});
