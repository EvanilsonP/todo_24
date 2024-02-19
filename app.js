require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./database/db.js');
db();

// Midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejse');

app.listen(PORT, () => {
    console.log(`Running on port ${5000}`);
});