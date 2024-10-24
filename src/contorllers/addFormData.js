const { formdatamodel } = require("../models/form/formdatamodel");

const addformdata = async (req, res) => {
  try {
    const data = req.body;
    // console.log(data);
    
    const datatosave = new formdatamodel(data);
    const response = await datatosave.save();
    console.log(response);
    
    res.status(200).json({ message: "data successfully connected" });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.toString() });
  }
};

const readformdata = async (req, res) => {
  try {
    const data = await formdatamodel.find();
    if (data.length === 0) {
      return res.status(202).json({ message: "no data available" });
    }
    res.status(200).json({ message: "data successfully loaded", data });
  } catch (err) {
    res.status(500).json({ message: "data not loaded", error: err.toString() });
    console.log(err);
  }
};

module.exports = {
  addformdata,
  readformdata,
};
