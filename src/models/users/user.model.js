// // Import npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// Account
const userSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    trim: true,
    unique: true,
    required: true
  },
  
  password: {
    type: String,
    trim: true,
    required: true
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    // match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    required: true
  }
}, {timestamps: true});

// Bcrypt password
userSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
  });
})

// Compare Password (function)
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

// // Compile the model from the schema
const account = mongoose.model('account', userSchema);

// // Export
module.exports = account;