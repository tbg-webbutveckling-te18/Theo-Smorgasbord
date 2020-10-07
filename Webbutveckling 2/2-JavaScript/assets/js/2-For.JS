


for(var i = 0; i <= 82; i++) {
    document.writeln('Count is ' +i + '<br>');
    

}


document.writeln('-------------------------------------')


//Increment by 2 (or more)
// count += 2 this is equal to count = count + 2;
for (var count = 1; count < 102; count+=2) {
    document.writeln('Count is ' + count + '<br>');
}

document.writeln('-------------------------------------<br>')

//Loop through a list
var str = 'Hello World!';
//document.writeln(str[0]);
for (var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}
document.writeln('<br>-------------------------------------<br>')
//Loop through an array
var codeArr = ['CSS', 'HTML', 'JS', 17, true];
var len = codeArr.length;
for (var i = 0; i < len; i++) {
    document.writeln('Language: ' + codeArr[i] + '<br>')
}

document.writeln('-------------------------------------<br>')

//The modulo operator returns the remainder of division
// != means not equal to
// !=== means not equal to AND CHECK IF SAME DATA TYPE
// == means equal to 12 == "12"
// === means equal to AND CHECK IF SAME DATA TYPE 12 === "12"
for (var i = 1; i < 366; i++) {
    if (i % 2 == 0) {
        document.writeln('Even dates: ' + i + '<br>');
    }
}
document.writeln('-------------------------------------<br>')
//Excercise 1 - Explain the code
//0 8



//Excercise 2 - Explain the code
//h e l l o

//Excercise 3 - Write on your own
//Print all numbers between -10 and 19

for (var i = -10; i < 20; i++) {
    document.writeln(i + '<br>')
}
document.writeln('-------------------------------------<br>')

//Excercise 4 - Write on your own
//Print all even numbers between 10 and 40
for (var i = 10; i < 41; i++) {
    if (i % 2 == 0) {
        document.writeln('Even numbers: ' + i + '<br>')
    }
}
document.writeln('-------------------------------------<br>')

//Excercise 5 - Write on your own
//Print all odd numbers between 300 and 333

for (var i = 300; i < 334; i++) {
    if (i % 2 != 0) {
        document.writeln('Odd numbers: ' + i + '<br>')
    }
}
document.writeln('-------------------------------------<br>')

//Excercise 6 - Write your own
//Print all even numbers divisible by 5 AND 3 between 5 and 50

for (var i = 5; i <= 50; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        document.writeln(i)
    }
    
}
document.writeln('<br>-------------------------------------<br>')
//Excercise 7: Multiplication table
//Write a for loop that iterates from 0 to 10
//For each iteration of the loop it will mulitply
//the number by 9 and log the result (e.g "2 * 9 = 18")

for (var i = 0; i <= 10; i++) {
    document.writeln(i + ' * 9' + ' = ' + i * 9 + '<br>')
}
document.writeln('<br>-------------------------------------<br>')
// Nested for loop
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        document.writeln('*')
    }
    document.writeln('<br>');
}

//Bonus: Use a nested for loop to show the tables for every multipier from 0 to 10

for (var i = 0; i < 11; i++) {
    document.writeln('<br>')
    for (var j = 0; j < 11; j++) {
        document.writeln('[ ' + i * j + ' ]')
    }
}

document.writeln('<br>-------------------------------------<br>')

//Create an array to hold your top choices (colors, food, games, presidents, whatever).
//for each choice, log to the screen a string like: "My #1 choice is blue."

var favColor = ['Dark Green', 'Burgundy', 'Purple']
var len = favColor.length
for (var i = 0; i < len; i++ ) {
    document.writeln('My number ' + (i + 1) + ' favourite color is : ' + favColor[i] + '<br>')
}
document.writeln('<br>-------------------------------------<br>')
//Same as above BUT!
//Make som logic depending if it's the first, second or third choice...
//1st, 2nd, 3rd, 4th, 5th and so on

var favDesserts = ['Chocolate pudding', 'Coockie dough', 'Kladdkaka', 'Pannacotta', 'Jello']
var len = favDesserts.length
for (var i = 0; i < len; i++) {
    choice = i + 1
    if (choice == 1) {
        document.writeln('My first choice is: ' + favDesserts[i] + '<br>')
    
    }
    else if (choice == 2) {
        document.writeln('My second choice is: ' + favDesserts[i] + '<br>')
    }
    else if (choice == 3) {
        document.writeln('My third choice is: ' + favDesserts[i] + '<br>')
    }
    else {
        document.writeln('My ' + choice + 'th ' + 'choice is: ' + favDesserts[i] + '<br>')
    }
}