
// var slideshow = document.getElementsByClassName("slideshow")[0];

var cards = document.getElementsByClassName("card")[0];

var btnLeft = document.getElementById("left");
btnLeft.addEventListener("click", function(){
    cards.style.marginLeft = "-250px";
})




var btnRight = document.getElementById("right");
btnRight.addEventListener("click", function(){
    cards.style.marginLeft = "250px";
})

