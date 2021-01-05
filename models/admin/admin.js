// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Admin
const adminSchema = new Schema ({

});

// // Create Table
const admin = mongoose.model('admin', adminSchema);

// // Export
module.exports = admin;