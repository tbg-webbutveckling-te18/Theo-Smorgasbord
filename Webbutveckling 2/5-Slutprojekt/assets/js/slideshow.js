var counter = 0;
// var slideshow = document.getElementsByClassName("slideshow")[0];

var cards = document.getElementsByClassName("card")[0];

var btnLeft = document.getElementById("left");
btnLeft.addEventListener("click", function(){
    counter += -300;
    cards.style.marginLeft = counter + 'px';

    console.log(counter);

    if (counter <= -900){
        counter = 300;
    }
})




var btnRight = document.getElementById("right");
btnRight.addEventListener("click", function(){
    counter += 300;
    cards.style.marginLeft = counter + 'px'

    console.log(counter);

    if(counter >= 900){
        counter = -300;
    }
})

