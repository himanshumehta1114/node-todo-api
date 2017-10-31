var mongoose = require('mongoose');

//enable mongoose to use promises
mongoose.Promise = global.Promise;

//connect to mongoDB database if it is present else create the new one
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
