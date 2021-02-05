var Person = ["Sid", 33, "Male", "EagleShieldsBay"];

Person.shift();

// document.writeln(Person[2])

var PersonFriends = ["Sven", "Gunnar"];


var user = {
    name: "Devin",
    age: 28,
    city: "HereSneezedDuck",
    friends: ["Bob", "Ross"],
    isEvil: true,
    shoutout: function() {
        alert("AUTOMAGISKT");
    },
    levelUp: function() {
        return this.age++;
    }
};

var LevelUpBtn = document.querySelector(".aging");
LevelUpBtn.addEventListener('click', function() {
    firstOutput.innerHTML = `<br> </br> My name is ${user.name} and I am ${user.levelUp()} years old`;
})

var firstOutput = document.getElementById("firstOutput");
firstOutput.innerHTML += ` <br> </br> My name is ${user.name} and I am ${user.age} years old. I live in ${user.city}`

user.shoutout();


var posts = [
    {
        author: "Phesto",
        comment: "I be coolin', school's in session, but I'm fresh in Rappin, so I take time off to never rhyme soft"
    
        
    },
    {
        author: "Big L",
        comment: "If rap was a game I'd be MVP, the most valuable poet on the M-I-C"
    },
    {
        author: "Kareem Campbell",
        comment: "Yo dude, chill"
    }
]
var postOutput = document.querySelector(".posts");


posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
})

var input = document.querySelector(".updateCity");
var city = document.querySelector(".posts .city");
input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') {
        city.innerHTML = input.value;
        document.body.style.backgroundColor = 'purple';
        document.body.style.transform += 'rotateX(45deg)'
        document.body.style.transform += 'rotateY(202deg)'
    }
})

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener('click', function() {
    // Bad way
    // city.style.fontWeight = "bold";
    // city.style.fontSize = "32px";
    // city.style.color = "yellow";
    // city.style.textShadow = "2px 4px 1px #000";

    //Good way
    //classList.add("")
    //classList.remove("")

    postOutput.classList.toggle("changeText");
})

/*
***************************************
Create your own code - movieDB
***************************************
*/
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

var movies = [
    {
        title: "Primal Fear",
        rating: "9/10",
        hasWatched: true,
    },
    {
        title: "Memento",
        rating: "8.2/10",
        hasWatched: true,
    },
    {
        title: "Scream",
        rating: "7.5/10",
        hasWatched: true,
    },
    {
        title: "American Psycho",
        rating: "8/10",
        hasWatched: true
    }
]
var outputMovies = document.querySelector(".moviebox")
movies.forEach(function(movie) {
    movie.innerHTML += `You have watched ${movie.title} and rated it ${movie.rating}`
})



var opc = document.querySelector("#outputCalc");
var countObj = {
    someText: "This is some text",
    count: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

opc.innerHTML = countObj.count(10, 5);

//Our own animal sound library

var outputSound = document.querySelector(".animalSound");
var animalSound = {
    dog: function() {
        outputSound.innerHTML = "Voff Voff";
    },
    cat: function() {
        outputSound.innerHTML = "Meeeeeeooow"
    },
    wolf: function() {
        outputSound.innerHTML = "Aaaaoooowwww"
    },
    cow: function() {
        outputSound.innerHTML = "Mooooo"
    }

}

for(var i = 0; i < btnAnimal.length; i++) {
    btnAnimal[i].addEventListener('click', function() {
        
    }
}
