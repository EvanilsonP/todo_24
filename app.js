require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./database/db.js');
db();

app.listen(PORT, () => {
    console.log(`Running on port ${5000}`);
});