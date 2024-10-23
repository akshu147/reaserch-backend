const mongoose = require("mongoose")
require("dotenv").config()
const url = `mongodb+srv://${process.env._clusterusername}:${process.env._clusteruserpassword}@akshay.y0o5z.mongodb.net/${process.env._databasename}?retryWrites=true&w=majority&appName=${process.env._clusterappname}`;

mongoose.connect(url)
.then(()=>{
    console.log("DATABASE CONNECTED")
})
.catch((err)=>{
    console.log("DATABASE CONNECTION ERROR",err)
})

