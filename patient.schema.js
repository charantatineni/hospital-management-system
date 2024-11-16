const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String, // might need to change to date object in future.
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  admissionDate: {
    type: String,
    required: true
  },
  medicalHistory: String,
  assignedDoctorId: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  wardId: {
    type: Schema.Types.ObjectId,
    ref: 'Ward',
    required: true
  },
  prescription: {
    type: String,
    required: true,
  },
  dateOfRelease: {
    type: Date,
    default: null
  },
  patientCondition: {
    type: String, 
    required: true,
    default: 'discharged',
    enum: ['discharged', 'deseased', 'affected']
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;