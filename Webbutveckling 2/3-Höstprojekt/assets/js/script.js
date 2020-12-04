var menuIfElse = document.getElementById("s1");
var menuFor = document.getElementById("s2");
var menuArray = document.getElementById("s3");
var menuObject = document.getElementById("s4");

var showIfElse = document.getElementsByClassName("ifelse")[0];
var showFor = document.getElementsByClassName("for")[0];
var showArray = document.getElementsByClassName("array")[0];
var showObject = document.getElementsByClassName("object")[0];

menuIfElse.addEventListener('click', function(){

    showIfElse.style.display = "block";
  
    showFor.style.display = "none";
    showArray.style.display = "none";
    showObject.style.display = "none";
})

menuFor.addEventListener('click', function(){

    showFor.style.display = "block";

    showIfElse.style.display = "none";
    showArray.style.display = "none";
    showObject.style.display = "none";
 
})

menuArray.addEventListener('click', function(){

    showArray.style.display = "block";

    showIfElse.style.display = "none";
    showFor.style.display = "none";
    showObject.style.display = "none";
})

menuObject.addEventListener('click', function(){
    showObject.style.display = "block";

    showIfElse.style.display = "none";
    showFor.style.display = "none";
    showArray.style.display = "none";
})

// var arrayTest = getElementsByClassName('array');
// getElementById()

// referens till varje länk

// for (var i = 0; i < arrayTest.length; i++) {
//     arrayTest[i].addEventlistener
// }