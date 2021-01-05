// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Center
const centerSchema = new Schema ({

});

// // Create Table
const center = mongoose.model('center', centerSchema);

// // Export
module.exports = center;