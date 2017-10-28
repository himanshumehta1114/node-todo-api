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
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to connect to database',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Himanshu Mehta',
    age: 20,
    location: 'New Delhi'
  } , (err, result) => {
    if(err){
      return console.log('Unable to connect',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
