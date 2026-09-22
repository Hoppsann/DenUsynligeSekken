const express = require("express");


const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))


let total_psycological_weight = 0;
let sekk;



app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/sekken", (req, res) =>{
    res.render("sekken",{
        vekt: total_psycological_weight || 0,
        text: sekk
        
    })
})

app.post("/sekken", (req, res) =>{
    sekk = req.body.sekk;
    console.log(sekk);
    const weight_amount = Number(sekk);
    total_psycological_weight += weight_amount;
    
    
    
    res.redirect("/sekken");
})



app.listen(4000, () =>{
    console.log("http://localhost:4000")
})