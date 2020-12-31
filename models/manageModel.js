const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stage3vmo-centerManage', {useNewUrlParser: true, useUnifiedTopology: true });
const { Schema } = mongoose;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connect! - Database');
});

const { Schema } = mongoose;
