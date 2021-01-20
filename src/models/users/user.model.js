// // Import npm
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// Account
const accountSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    trim: true,
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
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    required: true
  },

  role: {
    type: String,
    default: 'Basic',
    trim: true,
    enum: ['Admin', 'Basic'],
    required: true
  },
}, {timestamps: true});

accountSchema.pre('save', async (next) => {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
  });
})

accountSchema.methods.comparePassword = async (password, cb) => {
  return await bcrypt.compare(password, this.password, 
    async (err, isMatch) => {
      if (err) return cb(err);
      cb(null, isMatch);
    }
  );
};

// // Compile the model from the schema
const account = mongoose.model('account', accountSchema);

// // Export
module.exports = account;