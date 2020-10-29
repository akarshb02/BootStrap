var rand = Math.floor(Math.random() * 6) + 1;
var imso = "images/dice" + rand + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imso);

var rand2 = Math.floor(Math.random() * 6) + 1;
var sou = "images/dice" + rand2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", sou);



if (rand > rand2) {
    document.querySelector("h1").innerHTML = "Player1 is winner";
} else if (rand < rand2) {
    document.querySelector("h1").innerHTML = "Player2 is winner";

} else {
    document.querySelector("h1").innerHTML = "Draw!";
}