require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const {todo} = require('./models/todo');
const {user} = require('./models/user');
const {ObjectID} = require('mongodb');
var {authenticate} = require('./middleware/authenticate');

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

app.delete('/todos/:id', (req,res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
      res.status(404).send();
    }

    todo.findByIdAndRemove(id).then((todo) => {
      if(!todo){
        return res.status(404).send();
      }

      res.status(200).send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});

app.patch('/todos/:id', (req,res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text','completed']);

    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    }else {
      body.completed = false;
      body.completedAt = null;
    }

    todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if(!todo){
        return res.status(400).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
});

app.post('/users', (req,res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var users = new user(body);

  users.save().then(() => {
    return users.generateAuthToken();
    // res.send(doc);
  }).then((token) => {
    res.header('x-auth', token).send(users);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me' ,authenticate, (req,res) => {
  res.send(req.user);
});

app.post('/users/login', (req,res) => {
  var body = _.pick(req.body, ['email','password']);

  user.findByCredentials(body.email,body.password).then((users) => {
    return users.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(users);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
})

module.exports = {app};
