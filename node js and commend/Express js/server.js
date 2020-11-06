const express = require('Express')
const app = express()

app.get('/', function(request, response) {
    response.send("Hello world");

});
x

app.get('/contact', function(res, req) {

    req.send("contact me : akarsh226@gmail.com");
});

app.get('/about', function(req, res) {

    res.send("My Name is Akarsh and i'm a web developer");
});

app.listen(3000, function() {
    console.log(`Example app listening`);
});