// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Project
const projectSchema = new Schema ({

});

// // Compile the model from the schema
const project = mongoose.model('project', projectSchema);

// // Export
module.exports = project;