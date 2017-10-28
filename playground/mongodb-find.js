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
//toArray() returns a promise so we can then() on it
  // db.collection('Todos').find({
  //   _id: new ObjectID('59f4e766340826f80be2498a')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch docs',err);
  // });

  db.collection('Todos').count().then((count) => {
    console.log(`Todos count: ${count} `);
  }, (err) => {
    console.log('Unable to fetch docs',err);
  });
});
