const express = require("express");
const bodyParser = require("body-parser");

const app  = express();
app.set("view engine" , "ejs");

app.get("/", (req,res)=>{
      var today = new Date();
      var options = {
        weekday : "long",
        month : "long",
        day : "numeric"
      } ;
      var check = today.toLocaleDateString("en-US",options);
      // day = "";
      // day = check;
    res.render("list",{da:check});
});
app.listen(3000,()=>{
    console.log("Port 3000 started.");
});