// // Import
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Project
const projectSchema = new Schema ({

});

// // Create Table
const project = mongoose.model('project', projectSchema);

// // Export
module.exports = project;