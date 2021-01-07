// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Center Information
const centerInformationSchema = new Schema ({
  name: {
    type: Object,
    default: 'Demo',
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
const participatingProjectSchema = new Schema ({
  participatingProject:  [{ type: Schema.Types.ObjectId, ref: 'project' }]
});

const staffListSchema = new Schema ({
  participatingStaff: [{ type: Schema.Types.ObjectId, ref: 'staff' }]
});

// // 1. Centers || Department
const centerSchema = new Schema ({
  centerInformation: [centerInformationSchema],
  techStack: [techStackSchema],
  participatingProject: [participatingProjectSchema],
  staffList: [staffListSchema]
});

// // Compile the model from the schema
const center = mongoose.model('center', centerSchema);

// // Export
module.exports = center;