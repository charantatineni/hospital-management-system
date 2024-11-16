const express = require('express');

const router = express.Router();
const Ward = require('../db/schemas/ward.schema.js');
module.exports = router;


router.post('/createWard', async (req, res) => {
  try {
    const wardData = req.body;
    const existingWard = await Ward.findOne({ wardType: wardData.wardType });
    if (existingWard) {
      throw new Error("The ward already exists");
    }
    const newWard = new Ward(wardData);
    const result = await newWard.save();
    console.log(result);
    return res.json({
      message: "created ward successfully",
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


router.post('/updateWard', async (req, res) => {
  try {
    const wardData = req.body;
    let existingWard = await Ward.findOne({ wardType: wardData.wardType });
    if (!existingWard) throw new Error("Ward do not exist");
    const result = await existingWard.updateOne({...wardData});
    console.log(result);
    return res.json({
      message: "updated ward successfully",
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