const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// todo.remove({}).then((results) => {
//   console.log(results);
// });

todo.findByIdAndRemove('59fa40482a439f2180aa478c').then((todo)=> {
        console.log(todo);
});
