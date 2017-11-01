const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');

var id = '59fa1ee2ebe51e0f16ff31101';
//to check if Id is valid or not
if(!ObjectID.isValid(id)){
  console.log('Id is invalid');
}
// todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// })
