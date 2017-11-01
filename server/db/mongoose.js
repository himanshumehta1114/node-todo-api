var mongoose = require('mongoose');

//enable mongoose to use promises
mongoose.Promise = global.Promise;

//connect to mongoDB database if it is present else create the new one
mongoose.connect('mongodb://<himanshumehta1114>:<himanshu_1114>@ds243295.mlab.com:43295/nodetodoapi');

module.exports = {mongoose};
