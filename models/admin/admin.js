// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Admin
const adminSchema = new Schema ({
  username: {
    type: String,
    default: 'admin',
    unique: true,
    trim: true,
    required: true
  },
  
  password: {
    type: String,
    default: '123456',
    trim: true,
    required: true
  },

  email: {
    type: String,
    default: 'admin@admin.com',
    trim: true,
    required: true
  },

  role: {
    type: String,
    default: 'admin',
    trim: true,
    required: true
  },
});

// // Compile the model from the schema
const admin = mongoose.model('admin', adminSchema);

// // Export
module.exports = admin;