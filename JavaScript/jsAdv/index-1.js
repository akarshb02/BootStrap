var rand = Math.floor(Math.random() * 4) + 1;
var tar = 'sounds/tom-';
var numberof = document.querySelectorAll(".drum").length;
document.addEventListener('keypress', function(event) {
    makeSound(event.key);
    addAnimation(event.key);
});



for (var i = 0; i <= numberof; i++) {
    document.querySelectorAll("button")[i].addEventListener('click', function() {

        var buttonpre = this.innerHTML;
        makeSound(buttonpre);
        addAnimation(buttonpre);



    });
}



function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio(tar + 1 + '.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio(tar + 2 + '.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio(tar + 3 + '.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio(tar + 4 + '.mp3');
            tom4.play();
            break;
        case "j":
            var snaree = new Audio('sounds/snare' + '.mp3');
            snaree.play();
            break;
        case "k":
            var cr = new Audio('sounds/crash' + '.mp3');
            cr.play();
            break;
        case "l":
            var sa = new Audio('sounds/kick-bass' + '.mp3 ');
            sa.play();
            break;

        default:
            console.log();

    }


}

function addAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)


}