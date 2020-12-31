const mongoose = require('mongoose');

const { Schema } = mongoose;

//Project Type
const projectTypeSchema = new Schema({
  name: {
    type: String,
    // unique: true,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  priorityWeight: {
    type: Number,
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

const projectType = mongoose.model('projectType', projectTypeSchema);

module.exports = projectType;