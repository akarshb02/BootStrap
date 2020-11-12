const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const request = require("request")
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))




app.get("/", function(req, res) {

    res.sendFile(__dirname + "/singup.html");
});
app.post("/", function(req, res) {

    const firstName = req.body.nam;
    const lastName = req.body.lname;
    const email = req.body.emaill;




    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merg_fields: {
                Fame: firstName,
                Lname: lastName,

            }

        }]
    };
    const jsonedata = JSON.stringify(data);

    const url = " https://us2.api.mailchimp.com/3.0/lists/b392e7e878";

    const options = {
        method: "POST",
        auth: "Akarsh:2cb71a6755c587ef912ed50d249719bc-us2"
    }
    const request = https.request(url, options, function(respond) {

        if (respond.statusCode === 200) {

            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        respond.on("data", function(data) {
            console.log(JSON.parse(data));
        })

    })

    // request.write(jsonedata);
    request.end();


});
app.post("/failure", function(req, res) {

    res.redirect("/");

})

app.listen(3000, function() {

    console.log("server started");

})