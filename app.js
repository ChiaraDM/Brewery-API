const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const breweriesRouter = require('./routes/breweriesRoutes');

app.use("/breweries", breweriesRouter);







module.exports = app;