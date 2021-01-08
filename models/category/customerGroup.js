// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Customer Group
const customerGroupSchema = new Schema ({
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
    trim: true,
    unique: true,
    min: 1,
    max: 20,
    require: true
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
const customerGroupModel = mongoose.model('customer-group', customerGroupSchema);

// // Export
module.exports = customerGroupModel;