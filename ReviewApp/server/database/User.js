const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 } //the credit starts off at 0

});

mongoose.model('users', userSchema);
