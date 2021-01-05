// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

//States Project
const projectStatusSchema = new Schema ({
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
  status: {
    type: String, 
    default: 'Inactive', 
    trim: true, 
    enum: ['Active', 'Inactive'],
    required: true
  }
});

// // Compile the model from the schema
const projectStatus = mongoose.model('project-status', projectStatusSchema);

// // Export
module.exports = projectStatus;