var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Question = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  text: {type: String, required: true, minlength: 8},
  options: [{type: Schema.Types.ObjectId, ref:'Option'}]
}, {timestamps:true});

mongoose.model('Question', Question);
