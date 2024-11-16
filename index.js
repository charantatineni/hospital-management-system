require('dotenv').config();
const express = require('express');
const testRouter = require('./routes/test.route');
const doctorRouter = require('./routes/doctors.routes');
const patientRouter = require('./routes/patient.routes');
const wardRouter = require('./routes/ward.routes');
const dbConnector = require('./db/connector.js');
const bodyParser = require('body-parser')
const app = express();

app.listen(3000, (err) => {
  if (err) console.log('error occured while starting the server');
  else {
    console.log(`Server started on PORT ${process.env.PORT}`);

    app.use(bodyParser.json());

    // Database connection
    dbConnector.connectToDb();
    
    // Routes
    app.use('/',testRouter);

    app.use('/doctor', doctorRouter);
    app.use('/patient', patientRouter);
    app.use('/ward', wardRouter);
  }
})