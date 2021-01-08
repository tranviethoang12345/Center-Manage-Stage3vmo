// // Import npm
const mongoose = require('mongoose');

const { Schema } = mongoose;

// // Human Resources
// Staff Information
const staffInformationSchema = new Schema ({
  firstName: {
    type: String,
    default: '',
    trim: true
  },
  middleName: {
    type: String,
    default: '',
    trim: true
  },
  lastName: {
    type: String,
    default: '',
    trim: true
  },
  birthday: {
    type: Date,
    trim: true
  },
  identificationNumber: {
    type: String,
    trim: true,
    min: 1
  },
  phoneNumber: {
    type: String,
    trim: true,
    min: 1
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  foreignLanguage: {
    type: String,
    default: '',
    trim: true
  },
  certificate: {
    type: String,
    default: '',
    trim: true
  }
});

// Tech Stack
const techStackSchema = new Schema ({
  techStack: [{ type: Schema.Types.ObjectId, ref: 'tech-stack' }],
  experience: { 
    type: String,
    default: 'Fresher',
    trim: true
  }
});

// // 2. Staff
const staffSchema = new Schema ({
  staffInformation: staffInformationSchema,
  techStack: [techStackSchema],
  projectList: [{ type: Schema.Types.ObjectId, ref: 'project'}]
},
{
  timestamps: true,
});

// // Compile the model from the schema
const staff = mongoose.model('staff', staffSchema);

// //  Export
module.exports = staff;