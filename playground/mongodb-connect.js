const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongo server');

  db.close();
});
