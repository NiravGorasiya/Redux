const express = require("express")
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const bycyle = require("./router/Bycyle")

var url = "mongodb://localhost:27017/test";
mongoose.connect(url)
    .then((response) => {
        console.log("success full conneted");
    })
app.use(cors())
app.use(express.json())
app.use("/bycyle", bycyle)

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(5000, () => {
    console.log("server start");
})