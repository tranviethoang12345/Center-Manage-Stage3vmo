// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Admin
const adminSchema = new Schema ({

});

// // Compile the model from the schema
const admin = mongoose.model('admin', adminSchema);

// // Export
module.exports = admin;