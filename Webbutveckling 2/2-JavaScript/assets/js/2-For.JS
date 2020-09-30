


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