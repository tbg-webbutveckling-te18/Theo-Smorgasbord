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


