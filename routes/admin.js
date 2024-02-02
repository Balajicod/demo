const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("../utils/path")

router.use(bodyParser.urlencoded({ extended: true }))    
 

router.get("/add-producting",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","addProduct.html"))
 })

router.post("/add-producting",(req,res,next)=>{
    console.log("Form data : " , req.body)
    res.send("product send successfully")
 })

 module.exports = router;