
function twinkle() {
    document.writeln("BLINKA LILLA STJÄRNA DÄR!  <br>");
    document.writeln("HUR JAG UNDRAR VAR DU ÄR!? <br>");
    document.writeln("FJÄRRAN LOCKAR DU MIN SYN!<br>");
    document.writeln("LIKT EN DIAMANT I SKYN! <br>");
    document.writeln("<br>");
}


// twinkle();
// twinkle();


function square(num) {
    document.writeln(num * num)
}

square(82);

document.writeln("<br>_________<br>")

square(25);

document.writeln("<br>_________<br>")

square(32);

document.writeln("<br>_________<br>")

square(64);

document.writeln("<br>_________<br>")

square(1896);

document.writeln("<br>_________<br>")


function area(width, height) {
    return width * height;
}
var result = area(8, 92);

document.writeln("<br> The area is: " + result + " cm");

function quadrupleMe(x) {
    return 4 * x
}

var myNumber = quadrupleMe(2);

// Select an element 
var buttonNumber = document.getElementById("myNumber");

//Manipulate element
buttonNumber.innerHTML = "<strong> My </strong> favourite number is: " + myNumber

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "stockholm";
var capital = capitalize(city);
document.writeln("<br> Capital of Sweden: " + capital + "<br>")


//Skriftligt test

function isEven(num) {
     if (num % 2 == 0) {
         return true;
     }

}

var num = 8
isEven(num);



function kebabToSnake(kebstring) {
    return document.writeln(kebabstring.replaceAll('-', '_'));
}

var bruh = "Hej-Okej-Hallå";

kebabstring = bruh

kebabToSnake(kebabstring)


var p = document.getElementById("scopes"); //global scope

//declare
function localScope() {
    var localVar = 31;
    p.innerHTML = localVar
    
}

//call
localScope();

var globalVar = "This is a global variable";

p.innerHTML = globalVar;
p.style.fontSize = "20px";
p.style.color = "#639";

function changeGlobalVar() {
    globalVar = "Ha ha, I got a new value now!";
    p.innerHTML = globalVar;
}

//call
changeGlobalVar();

function tricky() {
    var globalVar = "Am I a local variable?"
    p.innerHTML = globalVar;
}
tricky();
p.innerHTML = globalVar;


function myTimer() {
    var d = new Date();
    var clock = document.getElementById("clock");
    clock.innerHTML = d.toLocaleTimeString();

}

myTimer();

var seconds = setInterval(myTimer, 1000); //function name and interval in milliseconds
var btnStopTime = document.getElementsByClassName("stopTime")[0];
var doomsStr = document.getElementById("doomsMessage");


btnStopTime.addEventListener("click", function() {
    clearInterval(seconds);
    doomsStr.innerHTML = "Ha Ha! Time is stopped forever!"
    doomsStr.style.transition = "all .4s ease";
    doomsStr.style.fontSize = "60px";
    doomsStr.style.color = "crimson";
});



//Write a function named tellfortune


var output = document.getElementById("tellFortune");
var btnFortune = document.getElementsByTagName("button")[2];


function tellFortune(kid, partner, place, job) {

    output.innerHTML = `You will be a ${job} in ${place} and married to ${partner} and have ${kid} kids <br>` ;


}

var jobArr = ["President", "Dictator", "Drugdealer", "Homeless Person", "Canadian Zookeeper", "Australian Mob-Boss", "Swedish Chef", "Proffesional muppeter", "Programmer" ];
var cityArr = ["New York", "Amsterdam", "Lycksele", "Umeå", "Kingston", "Bangkok", "Dubai", "Norsjö", "Lyon"];
var partnerArr = ["Emilia", "Emil", "Sacha", "Jim", "Nadia", "Susan", "Emelie", "Theo", "Peter", "Emily", "Katja", "Bror", "Mohammed", "Ali", "Julia", "Johannes", "William", "Esmeralda"];
var kidsArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,82];

btnFortune.addEventListener("click", function() {
    var randomKid = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomPartner = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomPlace = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];

    tellFortune();
});
