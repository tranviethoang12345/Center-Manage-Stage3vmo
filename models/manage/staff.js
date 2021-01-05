// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Human Resources
const staffSchema = new Schema ({

});

// // Compile the model from the schema
const staff = mongoose.model('human-resources', staffSchema);

// //  Export
module.exports = staff;