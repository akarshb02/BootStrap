const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/bmiCalculator.html");

});
app.post("/", function(req, res) {

    var weight = parseFloat(req.body.num1);
    var height = parseFloat(req.body.num2);

    var bim = weight / (height * height);

    res.send("the bim is " + bim);
});

app.listen(4000, function() {

    console.log("started....");

});