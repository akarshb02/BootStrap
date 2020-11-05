const fs = require('fs');
fs.copyFileSync("file.txt", "file1.txt");

var superhero = require("superheroes");
var randomm = superhero.random();



var superv = require("supervillains");
var v = superv.random();


console.log("hero " + randomm + " villens " + v);