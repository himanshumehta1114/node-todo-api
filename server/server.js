var {mongoose} = require('./db/mongoose.js');

var {todo} = require{'./server/todo'};

var {user} = require('./server/user');
//
// newTodo.save().then((doc) => {
//   console.log('Saved new todo', doc);
// }, (e) => {
//   console.log('Unable to save new todo', e);
// });

// var newTodo = new todo({
//   email: 'Himanshu@xyz.com'
// });

newTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo', e);
});
