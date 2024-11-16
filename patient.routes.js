const express = require('express');

const router = express.Router();
const Patient = require('../db/schemas/patient.schema.js');
const Doctor = require('../db/schemas/doctor.schema.js');
const dbUtils = require('../utils/dbUtils.js');
module.exports = router;


router.post('/createPatient', async (req, res) => {
  try {
    const patientData = req.body;
    const existingPatient = await Patient.findOne({ email: patientData.email });
    if (existingPatient) {
      throw new Error("The email already exists");
    }
    const newPatient = new Patient(patientData);
    const result = await newPatient.save()
    return res.json({
      message: "created patient successfully",
      error: null
    })
  } catch (e) {
    console.log(e);
    return res.json({
      message: e.message,
      body: null
    })
  }
});

router.post('/updatePatient', async (req, res) => {
  try {
    const patientData = req.body;
    let existingPatient = await Patient.findOne({ email: patientData.email });
    if (!existingPatient) throw new Error("Patient email do not exist");
    // const result = await Patient.updateOne({ email: patientData.email }, { ...patientData })
    const result = await existingPatient.updateOne({...patientData});
    console.log(result);
    return res.json({
      message: "updated patient successfully",
      error: null,
    })
  } catch (e) {
    console.log(e);
    return res.json({
      message: e.message,
      body: null
    })
  }
});




// complex query method
router.get('/doctorsWithPatientsAndWards', async (req, res) => {
  try {
    const doctors = await dbUtils.getAllDoctorsWithPatientsAndWards();
    return res.status(200).json({
      message: 'Doctors with patients and ward information',
      doctors
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: error.message
    });
  }
});


// complex query method
router.get('/patientsDischarged', async (req, res) => {
  try {
    const results = await dbUtils.patientsSpecNormal();
    return res.json({
      message: "Patients discharged with ward and doctor information",
      patients: results
    })
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      error: e
    })
  }
})