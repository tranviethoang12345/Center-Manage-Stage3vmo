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

// // Centers || Department
const centerSchema = new Schema ({
  centerInformation: centerInformationSchema,
  techStack: [{ type: Schema.Types.ObjectId, ref: 'tech-stack' }],
  project:  [{ type: Schema.Types.ObjectId, ref: 'project' }],
  staffList: [{ type: Schema.Types.ObjectId, ref: 'staff' }]
},
{
  timestamps: true,
});

// // Compile the model from the schema
const centerModel = mongoose.model('center', centerSchema);

// // Export
module.exports = centerModel;