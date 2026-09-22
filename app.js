const express = require("express");


const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))



app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/sekken", (req, res) =>{
    res.render("sekken")
})

app.post("/sekken", (req, res) =>{
    res.redirect("/sekken");
})



app.listen(4000, () =>{
    console.log("http://localhost:4000")
})