//insult generator
var randomBodyParts = ["nose", "face", "body"];
var randomAdjectives = ["stupid", "fricking", "lousy", "damn"];
var randomWords = ["mosquito", "rat", "monkey"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

//var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

randomInsult;

//another way to build up a random insult

var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");
