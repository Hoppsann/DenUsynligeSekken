const express = require("express");
const mongoose = require("mongoose");

const mongodb = mongoose.connect("mongodb://localhost:27017/helse")

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))


let total_psycological_weight = 0;



app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/sekken", (req, res) =>{
    res.render("sekken",{
        vekt: total_psycological_weight || 0,
    })
})

app.post("/sekken", (req, res) =>{
    const {sekk} = req.body;
    console.log(sekk);
    const weight_amount = Number(sekk);
    total_psycological_weight += weight_amount;
    
    
    
    res.redirect("/sekken")
})



app.listen(4000, () =>{
    console.log("http://localhost:4000")
})