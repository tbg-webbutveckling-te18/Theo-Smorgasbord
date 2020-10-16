
function twinkle() {
    document.writeln("BLINKA LILLA STJÄRNA DÄR!  <br>");
    document.writeln("HUR JAG UNDRAR VAR DU ÄR!? <br>");
    document.writeln("FJÄRRAN LOCKAR DU MIN SYN!<br>");
    document.writeln("LIKT EN DIAMANT I SKYN! <br>");
    document.writeln("<br>");
}


twinkle();
twinkle();


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

var bruh = "Hell-hole-bruh";

kebabstring = bruh

kebabToSnake(kebabstring)