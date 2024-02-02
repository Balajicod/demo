const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin")
const shopRouter = require("./routes/shop")
const path = require("path");



app.use("/admin",adminRouter);
app.use(shopRouter);

app.use((request, response, next)=>{
    response.status(404).sendFile(path.join(__dirname,"views","error.html"))
})


app.use(bodyParser.urlencoded({ extended: true }))    

 app.listen(3000);
