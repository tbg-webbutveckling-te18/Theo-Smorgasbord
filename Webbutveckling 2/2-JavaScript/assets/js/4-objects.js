var Person = ["Sid", 33, "Male", "EagleShieldsBay"];

Person.shift();

document.writeln(Person[2])

var PersonFriends = ["Sven", "Gunnar"];


var user = {
    name: "Devin The Dude",
    age: 28,
    city: "HereSneezedDuck",
    friends: ["Bob", "Ross"],
    isEvil: true, 
    shoutout: function() {
        alert("Shoutout to the Souls Of Mischief crew!")
    }
};

document.writeln(` <br> </br> My name is ${user.name} and I am ${user.age} years old. I live in ${user.city}`)

user.shoutout();