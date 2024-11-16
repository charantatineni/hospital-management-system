const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
  ward_id: String,
  wardType: {
    type: String,
    unique: true,
    required: true
  },
  totalBeds: {
    type: Number,
    required: true
  },
  availableBeds: {
    type: Number,
    required: true
  },
  wardCharge: {
    type: Number,
    required: true
  },
});


const Ward = mongoose.model('Ward', wardSchema);


module.exports = Ward;






