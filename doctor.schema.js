const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctor_id: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  workingHours: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;