const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine" , "ejs");
app.get("/",function(req,res){
var today = new Date();
var check = today.getDay();
var day = "";
switch(check){
        case 0:
                day = "Sunday";
                break;
        case 1:
                day = "Monday";
                break;
                case 2:
                day = "Monday"
                ;
                break;
                case 3:
                day = "Tuesday";
                break;
                case 4:
                day = "Wednesday";
                break;
                case 5:
                day = "Friday";
                break;
                case 6:
                day = "Saturday";
                break;
                default:
                        day = "Error!" + check;

}
        res.render("list",{da:day});

});

app.listen(3000,function(){
        console.log("Port started at 3000.");
});
