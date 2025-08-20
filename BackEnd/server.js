require('dotenv').config();
const app = require('./src/app');
const cors = require('cors');

app.use(cors());

module.exports = app;
