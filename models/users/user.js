// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Admin
const adminSchema = new Schema ({
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
});

// // Compile the model from the schema
const admin = mongoose.model('admin', adminSchema);

// // Export
module.exports = admin;