
var slideshow = document.getElementsByClassName("slideshow")[0];

var btnLeft = document.getElementById("left");
btnLeft.addEventListener("click", function(){
    slideshow.style.marginLeft = "-250px";
})




var btnRight = document.getElementById("right");
btnRight.addEventListener("click", function(){
    slideshow.style.marginLeft = "250px";
})

