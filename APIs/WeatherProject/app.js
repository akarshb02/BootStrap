const { response } = require("express");
const expree = require("express");

const https = require("https");
const app = expree();

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=89c128f539e701d0bbb8da0da8916bea&units=metric"


app.get("/", function(req, res) {

    https.get(url, function(response) {

        console.log(response.statusCode);


        response.on("data", function(data) {

            const weatherd = JSON.parse(data);
            console.log(weatherd);
            const temp = weatherd.main.temp;
            const desc = weatherd.weather[0].description;
            res.write(" <h1> the temperature is " + temp + "degrees" + "</h1> \n" + "</h1>");
            res.write("<h2>The weather is currently " + "<em>" + desc + "</em></h2>");

            res.send();



        });
    });

});


app.listen(2000, function() {
    console.log("server started");
});