var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
nextSequence();

function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 3);
    for (var i = 0; i <= 4; i++) {
        var randomChoose = buttonColor[randomNumber];
        gamePattern.push(randomChoose);
    }
    $("#" + randomChoose).on("click", function() {
        $("#" + randomChoose).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


    });
}