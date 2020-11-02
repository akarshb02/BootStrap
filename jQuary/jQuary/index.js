$("h1").addClass("big");

alert($("h1").hasClass("big"));

$("a").attr("href", "http://yahoo.com");
$("h1").click(function() {
        $("h1").css("color", "blue");
    })
    /* using javascript Dom


    for (i = 0; i <= 5; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function() {
            document.querySelector("h1").style.color = "blue";
        });
    }*/


// using jQuary
// $("button").click(function() {
//     $("h1").css("color", "violet");

// });


$(document).keydown(function(event) {
    $("h1").html(event.key);
});