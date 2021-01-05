// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Center
const centerSchema = new Schema ({

});

// // Compile the model from the schema
const center = mongoose.model('center', centerSchema);

// // Export
module.exports = center;