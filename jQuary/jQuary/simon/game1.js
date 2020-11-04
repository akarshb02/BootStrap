var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
nextSequence();

var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function() {
    if (!started) {
        $('#tit').text("Level " + level);
        nextSequence();
        started = true;
    }
});


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);

});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#tit").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}



function playSound(name) {
    var aa = new Audio('sounds/' + name + '.mp3');
    aa.play();

}

function animatePress(currentColour) {


    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


function nextSequence() {

    level++;


    $("#tit").text = ("Level" + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoose = buttonColor[randomNumber];
    gamePattern.push(randomChoose);

    $("#" + randomChoose).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}