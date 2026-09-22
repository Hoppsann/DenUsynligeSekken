const express = require("express");


const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))



let sekken = [];
let totalSkala = 0;

app.get("/", (req, res) =>{
    res.render("index")
})

app.get("/sekken", (req, res) =>{
    res.render("sekken", {
        sekken: sekken,
        totalSkala: totalSkala
    })
})

app.post("/sekken", (req, res) =>{
    const {tyngde, skala} = req.body;
    const tallSkala = Number(skala)
    sekken.push({
        tyngde: tyngde
    });

    totalSkala += tallSkala;
    res.redirect("/sekken");
})



app.listen(4000, () =>{
    console.log("http://localhost:4000")
})