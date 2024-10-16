const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');
app.use(cors());
const app = express();
app.use(express.json());
app.use(planetsRouter);
module.export = app;