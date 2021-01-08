// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

const refSchema = new Schema ({
  
})

// // 3. Project
const projectSchema = new Schema ({
  projectInformation: {
    type: String,
    trim: true
  },
  projectType: { type: Schema.Types.ObjectId, ref: 'project-type' },
  projectStatus: { type: Schema.Types.ObjectId, ref: 'project-status' },
  techStack: { type: Schema.Types.ObjectId, ref: 'tech-stack' },
  center: { type: Schema.Types.ObjectId, ref: 'center' },
  staff: { type: Schema.Types.ObjectId, ref: 'staff' }
},
{
  timestamps: true,
});

// // Compile the model from the schema
const projectModel = mongoose.model('project', projectSchema);

// // Export
module.exports = projectModel;