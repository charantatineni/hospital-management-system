const express = require('express');

const router = express.Router();
const Doctor = require('../db/schemas/doctor.schema.js');
module.exports = router;

router.get('/test', async (req, res) => {
  try {
    // const newDoctor = new Doctor({
    //   first_name: 'Alice',
    //   last_name: 'Smith',
    //   email: 'alice.smith@example.com',
    //   phone: '555-123-4567',
    //   specialization: 'Cardiology',
    //   years_of_experience: 10,
    //   working_hours: '9:00 AM - 5:00 PM'
    // });
    // const result = await newDoctor.save();
    // const newPatient = new Patient({
    //   first_name: 'John',
    //   last_name: 'Doe',
    //   date_of_birth: new Date('1990-01-01'),
    //   gender: 'Male',
    //   contact_number: '123-456-7890',
    //   email: 'john.doe@example.com',
    //   address: '123 Main St',
    //   admission_date: new Date(),
    //   medical_history: 'None',
    //   assigned_doctor_id: newDoctor.doctor_id, // Using the doctor_id of the newDoctor
    //   ward_id: 'W1' // Replace with actual ward_id from the wards collection
    // });
    // const newWard = new Ward({
    //   ward_type: 'General',
    //   total_beds: 20,
    //   available_beds: 18,
    //   ward_charge: 200
    // });
    const result = await newPatient.save();
    return res.json({
      message: "new doctor saved",
      result,
    })
  } catch (e) {
    console.log(e);
    return res.json({
      error: e
    })
  }

})

// ward types

// General ward, semi-private ward, private ward. 
