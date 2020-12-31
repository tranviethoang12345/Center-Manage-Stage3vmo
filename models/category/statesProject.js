const mongoose = require('mongoose');

const { Schema } = mongoose;

//States Project
const statesProjectSchema = new Schema({
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
  status: {
    type: String, 
    default: 'Inactive', 
    trim: true, 
    enum: ['Active', 'Inactive'],
    required: true
  }
});

const statesProject = mongoose.model('statesProject', statesProjectSchema);

module.exports = statesProject;