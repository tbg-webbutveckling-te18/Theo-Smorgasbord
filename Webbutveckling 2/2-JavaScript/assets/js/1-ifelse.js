//Greater than
var age = 17;
if (age >= 18) {
    console.log('Du får ta körkortet.');
} else {
    console.log('Du får inte ta körkortet.');
}

// If something is equal to
var lesson = 'Web development';
if (lesson == 'History') {
    console.log('We have: ' + lesson);
} else if (lesson == 'Web development') {
    console.log('We have ' + lesson);
} else {
    console.log('Spare time!');
}

var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today.');
} else {
    console.log('Put on some warm clothes today');
}

// step Uno
var d = new Date();

if (d.getHours() < 18) {
    console.log('Goodday sir!')

    //step Dos
} else if (d.getHours() < 10) {
    console.log('Good Morning')
} else {
    console.log('Good evening boys and girls!')
}

//step Tres
if (d.getHours() < 11) {
    console.log('Vakna nu, din sopa!')

    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log('Sov som en björn')
    }
    
} else if (d.getHours() < 10) {
    console.log('Good Morning')
} else {
    console.log('Good evening boys and girls!')
}




var grade = 'A';
switch(grade) {
    case 'A':
        console.log('GG')
    break;

    case 'B':
        console.log('Well Done')
    break;

    case 'C':
        console.log('Nice')
    break;

    case 'D':
        console.log('Okay')
    break;

    case 'E': 
        console.log('You could do better')
    break;

    case 'F':
        console.log('You suck!')
    break;

    default:
        console.log('Unknown grade...')


}

// switch-statement med veckodagar

var whatday = new Date();

switch(whatday.getDay()) { 
    
    case 0:
        console.log('Det är söndag mina bekanta')
    break;

    case 1:
        console.log('Det är nu måndag')
    break;

    case 2:
        console.log('Det är tisdag mina bekanta')
    break;

    case 3:
        console.log('Onsdag idag ju!')
    break;

    case 4:
        console.log('Idag = Torsdag')
    break;

    case 5:
        console.log('Fredag nu ju, tagga helg boys!')
    break;

    case 6: 
        console.log('Lördag idag')
    break;
    
    
}


