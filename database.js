
const Mongoose = require('mongoose');
const config = require('./config');

// Database hosted on mlab.com
Mongoose.connect('mongodb://utkarsh:password@ds131480.mlab.com:31480/hapi-auth');
//Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;
