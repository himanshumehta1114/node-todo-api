const validator = require('validator');
const mongoose = require('mongoose');

var user = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `it is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = {user};
