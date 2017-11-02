var mongoose = require('mongoose');
var dbConnect = 'mongodb://user:0000@ds243295.mlab.com:43295/nodetodoapi';
//enable mongoose to use promises
mongoose.Promise = global.Promise;

//connect to mongoDB database if it is present else create the new one
mongoose.connect(dbConnect, { useMongoClient : true});

module.exports = {mongoose,dbConnect};
