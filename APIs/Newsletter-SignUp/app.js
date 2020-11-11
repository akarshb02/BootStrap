const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const request = require("request")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))




app.get("/", function(req, res) {

    res.sendFile(__dirname + "/singup.html");
});
app.post("/", function(req, res) {

    console.log(req.body.nam);

});


app.listen(3000, function() {

    console.log("server started");

})