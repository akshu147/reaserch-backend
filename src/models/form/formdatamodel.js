const mongoose = require("mongoose")
const formdataschema = new mongoose.Schema({
    name:String,
    designation:String,
    ward:String,
    date:Number,
    age:Number,
    ans2:String,
    ans3:String,
    ans4:String,
    ans5:String,
    ans6:String,
    ans7:String,
    ans8:String,
    ans9:String,
    ans10:String,
    ans11:String,
    ans12:String,
    ans13:String,
    ans14:String,
    ans15:String,
    ans16:String,
    ans17:String,
    ans18:String,
    ans19:String,
    ans20:String,
    ans21:String,
    ans22:String,
    ans23:String,
    ans24:String,
    ans25:String,
    ans26:String,
    ans27:String,
    ans28:String,
    ans29:String,
    ans30:String,
    ans31:String,
    ans33:String,    
})

const formdatamodel = mongoose.model("formdatas", formdataschema)
module.exports = {formdatamodel}

