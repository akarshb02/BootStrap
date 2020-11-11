const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});


app.post("/", function(req, res) {
    const https = require("https");
    const query = req.body.num;
    const apiKey = "89c128f539e701d0bbb8da0da8916bea";
    const unites = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unites;

    https.get(url, function(response) {

        console.log(response.statusCode);




        response.on("data", function(data) {

            const weatherd = JSON.parse(data);
            console.log(weatherd);
            const temp = weatherd.main.temp;
            const desc = weatherd.weather[0].description;
            const ico = weatherd.weather[0].icon;
            const imageurl = "http://openweathermap.org/img/wn/" + ico + "@2x.png";
            res.write(" <h1> the temperature is " + temp + "degrees" + "</h1> \n" + "</h1>");
            res.write("<h2>The temperature in " + query + " is " + "<em>" + desc + "</em></h2>");
            res.write("<img src=" + imageurl + ">");

            res.send();



        });
    });

});


app.listen(2000, function() {
    console.log("server started");
});