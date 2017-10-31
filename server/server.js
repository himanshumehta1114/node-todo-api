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
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('Started on port 3000');
})
