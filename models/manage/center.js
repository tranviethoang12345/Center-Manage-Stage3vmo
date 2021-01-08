// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Center Information
const centerInformationSchema = new Schema ({
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  }
});

// Tech Stack
const techStackSchema = new Schema ({
  techStack: { type: Schema.Types.ObjectId, ref: 'tech-stack'},
  experience: { 
    type: String,
    default: 'Fresher',
    trim: true
  }
});

// Project
const projectSchema = new Schema ({
  project:  [{ type: Schema.Types.ObjectId, ref: 'project' }]
});

const staffListSchema = new Schema ({
  staffList: [{ type: Schema.Types.ObjectId, ref: 'staff' }]
});

// // 1. Centers || Department
const centerSchema = new Schema ({
  centerInformation: centerInformationSchema,
  techStack: [techStackSchema],
  project: [projectSchema],
  staff: [staffListSchema]
},
{
  timestamps: true,
});

// // Compile the model from the schema
const centerModel = mongoose.model('center', centerSchema);

// // Export
module.exports = centerModel;