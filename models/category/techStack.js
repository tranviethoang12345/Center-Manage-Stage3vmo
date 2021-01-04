const mongoose = require('mongoose');

const { Schema } = mongoose;

//Tech stack
const techStackSchema = new Schema({
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

const techStack = mongoose.model('techStack', techStackSchema);

module.exports = techStack;