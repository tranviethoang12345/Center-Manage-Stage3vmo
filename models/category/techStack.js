// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Tech stack
const techStackSchema = new Schema ({
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
},
{
  timestamps: true,
});

// // Compile the model from the schema
const techStackModel = mongoose.model('tech-stack', techStackSchema);

// // Export
module.exports = techStackModel;