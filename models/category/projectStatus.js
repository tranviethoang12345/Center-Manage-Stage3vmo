const mongoose = require('mongoose');

const { Schema } = mongoose;

//States Project
const statusProjectSchema = new Schema({
  name: {
    type: String,
    // unique: true,
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

const statusProject = mongoose.model('statesProject', statusProjectSchema);

module.exports = statusProject;