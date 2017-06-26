var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Option = new mongoose.Schema({
  text: {type: String, required: true, minlength: 3},
  vote: {type: Number, required: true, default: 0}
}, {timestamps:true});

mongoose.model('Option', Option);
