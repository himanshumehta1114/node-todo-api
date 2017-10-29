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

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Himanshu Mehta'}).then((results) => {
  //   console.log(results);
  // });

  // deleteOne
  // db.collection('Users').deleteOne({name: 'Mohan'}).then((results) => {
  //   console.log(results);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({_id : new ObjectID('59f4e37bb1beaf2ed042d042')}).then((results) => {
    console.log(results);
  });
});
