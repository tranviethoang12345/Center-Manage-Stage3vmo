// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Human Resources
const staffSchema = new Schema ({
  name: {
    firstName: {
      type: String,
      default: '',
      unique: true,
      trim: true
    },
    middleName: {
      type: String,
      default: '',
      unique: true,
      trim: true
    },
    lastName: {
      type: String,
      default: '',
      unique: true,
      trim: true
    }
  },
  birthday: {
    type: Date,
    default: '',
    trim: true
  },
  identificationNumber: {
    type: Number,
    default: '',
    unique: true,
    trim: true,
    min: 1
  },
  phoneNumber: {
    type: Number,
    default: '',
    unique: true,
    trim: true,
    min: 1
  },
  address: {
    type: String,
    default: '',
    unique: true,
    trim: true
  },
  foreignLanguage: {
    type: String,
    default: '',
    unique: true,
    trim: true
  },
  certificate: {
    type: String,
    default: '',
    unique: true,
    trim: true
  }
});

// // Compile the model from the schema
const staff = mongoose.model('human-resources', staffSchema);

// // Virtual
staffSchema.virtual('fullName').
  get(function () {
    return this.name.firstName + ' ' + this.name.middleName + ' ' + this.name.lastName;
  })

// // create a document
// const axl = new Person({
//   name: { first: 'Axl', last: 'Rose' }
// });
// console.log(axl.name.first + ' ' + axl.name.last); // Axl Rose
// personSchema.virtual('fullName').get(function() {
//   return this.name.first + ' ' + this.name.last;
// });
// console.log(axl.fullName); // Axl Rose


// //  Export
module.exports = staff;