const mongoose = require('mongoose');


module.exports.connectToDb = async () => {
  try {
    const options = {};
    const connectionURL = process.env.MONGO_DB_CONNECTION_URL || "mongodb://localhost:27017/hospital_management";
    // Connect to MongoDB
    const result = await mongoose.connect('mongodb://localhost:27017/hospital_management');
    // console.log(result);
    console.log('Connection successfull');
    return {
      connected: true,
      result
    }
  } catch (e) {
    console.log(e);
    return {
      connected: false,
      error: e
    }
  }
}


