var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

// tells the system that we want to use json on the page
app.use(bodyParser.json());

// to create a new todo
app.post('/todos', (req,res) => {
  var Todo = new todo({
    text: req.body.text
  });


  Todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
})

module.exports = {app};
