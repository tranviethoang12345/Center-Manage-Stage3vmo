const express = require('express');
const bodyParser =  require('body-parser');

const manageRouter = require('./routes/manageRoutes');
const categoryRouter = require('./routes/manageRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/manage', manageRouter);
app.use('/category', categoryRouter);

app.listen(3000, () => {
    console.log('Success!');
});