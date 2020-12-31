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

//States Project
const statesProjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
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
const statesProject = mongoose.model('statesProject', statesProjectSchema);
const techStack = mongoose.model('techStack', techStackSchema);
const customerGroup = mongoose.model('customerGroup', customerGroupSchema);

module.exports = {
  projectType, statesProject, techStack, customerGroup
};