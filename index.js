require("dotenv").config()
require("./src/db/config")
const cors = require("cors")
const  express = require("express")
const { allroutes } = require("./src/app")
const app = express()
app.use(express.json());
app.use(cors())
app.use("/api", allroutes)
app.listen(process.env._port, ()=> {
    console.log("Server is successfully created")
})