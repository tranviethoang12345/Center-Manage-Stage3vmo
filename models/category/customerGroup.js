const mongoose = require('mongoose');

const { Schema } = mongoose;

//Customer Group
const customerGroupSchema = new Schema({
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

const customerGroup = mongoose.model('techStack', customerGroupSchema);

module.exports = customerGroup;