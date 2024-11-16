const Doctor = require('../db/schemas/doctor.schema.js');
const Patient = require('../db/schemas/patient.schema.js');

async function getAllDoctorsWithPatientsAndWards() {
  try {
    // return doctorsWithPatientsAndWards;
    const doctors = await Doctor.find().lean().exec();
    const patientsForEachDoctor = await Promise.all(doctors.map(async (doctor) => {
      console.log('doctor info', doctor._id.toString());
      const patients = await Patient.find({ assignedDoctorId: doctor._id }).populate('wardId').exec();
      return { ...doctor, patients };
    })) 
    return patientsForEachDoctor;
  } catch (error) {
    throw error;
  }
}

exports.getAllDoctorsWithPatientsAndWards = getAllDoctorsWithPatientsAndWards;


// retreve all patients whose condition is normal by the time they were discharged along with the details 
// of the ward and the doctor

async function patientsSpecNormal() {
  try {
    const patients = await Patient.find({ patientCondition: 'discharged' }).populate('wardId').populate('assignedDoctorId').lean().exec();
    return patients;
  } catch (error) {
    throw error;
  }
}

exports.patientsSpecNormal = patientsSpecNormal;