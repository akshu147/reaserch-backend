const { response } = require("express");
const { formdatamodel } = require("../models/form/formdatamodel");

const addformdata = async(req, res)=> {
    try {
        const data = req.body;
        console.log(data)
        const datatosave = new formdatamodel(data)
        const responce = await datatosave.save()
        console.log(responce)
        res.status(200).json({message:"data successfully connected"})
    }
    catch(err) {
        res.status(500).json({message:"server error", err})
    }
}


const readformdata = async(req, res)=> {
    try {
        const data = await formdatamodel.find()
        if(data.length === 0) return res.status(202).json({message:"no data availible"})
        res.status(200).json({message:"data successfully loaded", data:data})
    }
    catch(err) {
        res.status(500).json({message:"data have't loaded", err})
        console.log(err)
    }
}

module.exports = {
    addformdata,
    readformdata
}