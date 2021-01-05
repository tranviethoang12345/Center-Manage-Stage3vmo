// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

//Project Type
const projectTypeSchema = new Schema ({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  priorityWeight: {
    type: Number,
    default: 10,
    trim: true,
    min: 1
  },
  status: {
    type: String, 
    default: 'Inactive', 
    trim: true, 
    enum: ['Active', 'Inactive'],
    required: true
  }
});

// // Create Table
const projectType = mongoose.model('project-type', projectTypeSchema);

// // Export
module.exports = projectType;