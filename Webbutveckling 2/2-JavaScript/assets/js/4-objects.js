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
    }
};

var LevelUpBtn = document.querySelector(".aging");
LevelUpBtn.addEventListener('click', function() {
    user.age++;
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
        comment: "If rap was a game I'd be MVP, the most valuable poet in the NYC"
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

