const express = require("express")
const { fromroutes } = require("./routes/form/form")
const allroutes = express.Router()
allroutes.use("/formdata", fromroutes)
module.exports = {allroutes}