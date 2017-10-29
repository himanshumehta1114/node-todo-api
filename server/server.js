var mongoose = require('mongoose');

//enable mongoose to use promises
mongoose.Promise = global.Promise;

//connect to mongoDB database if it is present else create the new one
mongoose.connect('mongodb://localhost:27017/TodoApp');

var toDo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new toDo({
  text: 'Cook Dinner',
  completed: true
});

newTodo.save().then((doc) => {
  console.log('Saved new todo', doc);
}, (e) => {
  console.log('Unable to save new todo', e);
});
