// // Import npm
const mongoose = require('mongoose');

const { Schema } = mongoose;

// // Human Resources
// Staff Information
const staffInformationSchema = new Schema ({
  firstName: {
    type: String,
    trim: true,
    require: true
  },
  middleName: {
    type: String,
    trim: true,
    require: true
  },
  lastName: {
    type: String,
    trim: true,
    require: true
  },
  birthday: {
    type: Date,
    default: '1990-01-01T12:12:12.704+00:00',
    trim: true
  },
  identificationNumber: {
    type: String,
    trim: true,
    min: 1,
    max: 12, 
    required: true
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
    default: 'University',
    trim: true
  }
});

// Tech Stack
const techStackSchema = new Schema ({
  techStack: { type: Schema.Types.ObjectId, ref: 'tech-stack' },
  experience: { 
    type: String,
    default: 'Fresher',
    enum: ['Fresher', 'Junior', 'Senior'],
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