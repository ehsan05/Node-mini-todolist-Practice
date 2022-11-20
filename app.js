const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items = ["Buy Food","Cook Food","Eat Food"];
let workitem = [];
// console.log(date);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));  //to access the static element
app.get("/",(req,res)=>{
     
let today = new Date();
let options = {
    weekday : "long",
    month : "long",
    day : "numeric"
};

let day = today.toLocaleDateString("en-US",options);
res.render("list",{da:day,newListItems:items});
});

app.get("/work",(req,res)=>{
    res.render("list",{da:"Work Items",newListItems:workitem});
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.post("/",(req,res)=>{
     let item = req.body.newItem;

    if(req.body.list === "Work"){
    workitem.push(item);
     res.redirect("/work");   
    }
    else{
    items.push(item);
     res.redirect("/");
    }
    // res.render("list",{newListItem:item}); 
    });

app.post("/work",(req,res)=>{
    if(req.body.list === "Work"){
        let items = req.body.newItem;
        workitem.push(items);}
});

app.listen(3000,()=>{
    console.log("Port started at 3000.");
});