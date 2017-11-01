var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {todo} = require('./models/todo');
var {user} = require('./models/user');
var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;
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

app.get('/todos', (req,res) => {
  todo.find().then((todos) => {
    res.send({todos});
  },(e) => {
    res.status(400).send(e);
  });
});

// app.get /todos/13245

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
    todo.findById(id).then((todo) => {
      if(!todo){
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
})

module.exports = {app};
