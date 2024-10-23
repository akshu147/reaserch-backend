const express = require("express")
const { addformdata, readformdata } = require("../../contorllers/addFormData")
const fromroutes = express.Router()

fromroutes.post("/form", addformdata )
fromroutes.get("/read-formdata", readformdata)
module.exports = {
    fromroutes
}