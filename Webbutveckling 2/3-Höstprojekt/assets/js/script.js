var sectionIfElse = getElementById(s1);
var sectionFor = getElementById(s2);
var sectionArray = getElementById(s3);
var sectionObject = getElementById(s4);

s1.addEventlistener('click', s1Function(){
    //Display: block för denna
    //Display: none för de andra 3x
})

s2.addEventlistener('click', s2Function(){
    //Display: blcok för denna
    //Display: none för de andra 3
})

s3.addEventlistener('click', s3Function(){
    //Display: blcok för denna
    //Display: none för de andra 3
})

s4.addEventlistener('click', s4Function(){
    //Display: blcok för denna
    //Display: none för de andra 3
})

// var arrayTest = getElementsByClassName('array');
// getElementById()

// referens till varje länk

// for (var i = 0; i < arrayTest.length; i++) {
//     arrayTest[i].addEventlistener
// }