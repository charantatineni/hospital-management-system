const express = require('express');

const router = express.Router();
const Doctor = require('../db/schemas/doctor.schema.js');
module.exports = router;


router.post('/createDoctor', async (req, res) => {
  try {
    const doctorData = req.body;
    const existingDoctor = await Doctor.findOne({ email: doctorData.email });
    if (existingDoctor) {
      throw new Error("The email already exists");
    }
    const newDoctor = new Doctor(doctorData);
    const result = await newDoctor.save()
    return res.json({
      message: "created doctor successfully",
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

router.post('/updateDoctor', async (req, res) => {
  try {
    const doctorData = req.body;
    let existingDoctor = await Doctor.findOne({ email: doctorData.email });
    if (!existingDoctor) throw new Error("doctor email do not exist");
    // const result = await Patient.updateOne({ email: doctorData.email }, { ...doctorData })
    const result = await existingDoctor.updateOne({...doctorData});
    console.log(result);
    return res.json({
      message: "updated doctor details successfully",
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
