/*var surname = "barczek";
console.log("Hello " + surname);
if (surname.length > 10) {
	console.log("Wow, you have a really long name!")
} else {
	console.log("Your name is not very long.")
};
*/

var lemonChicken = true;
var sweetAndSourPork = false;
var riceAndChicken = false;

if (lemonChicken) {
	console.log("Great! I'm having lemon chicken!")
} else if (sweetAndSourPork) {
	console.log("I'm having the pork.")
} else if (riceAndChicken) {
	console.log("Well, I guess I'll have rice and chicken.")
} else {
	console.log("In that case, I'll just have vegetable fried rice.");



var name = "Karina";
if (name === "Karina") {
	console.log("Hi, Karina!")
} else {
	console.log("Wrong name, can't give the password!")
}


//loops
x = 12;
while (x > 10) {
	console.log(x + " is less than 10")
	x--;
}
console.log(x + " is not less than 10");

//
var sheepCounted = 0;
while (sheepCounted <= 100) {
	console.log("I have counted " + sheepCounted + " sheep!")
	sheepCounted++;
};
console.log("Zzzzzzzzzz");

//
var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
	console.log("Hello!");
}
//

var animals = ["lemur", "parrot", "horse", "giraffe", "boa constrictor"];
for (var i = 0; i < animals.length; i++) {
	console.log("This zoo contains a " + animals[i] +".");
};

//
var surname = "Barczykowska";
for (var i = 0; i < surname.length; i++) {
	console.log("My surname contains the letter " + surname[i] + ".");
};

//print all powers of 2 below 10000
for (var i = 2; i < 10; i = i*2) {
	console.log(i);
};

//print all powers of 3 below 10000
for (var i = 3; i < 10000; i = i * 3) {
	console.log(i);
};

i = 3;
while ( i < 1000){
	console.log(i);
	i = i * 3;
}

//making awesome animals
var animals = ["cat", "dog", "lemur", "wild pig", "rattle snake"];
for (var i = 0; i < animals.length; i++) {
	animals[i] = "awesome " + animals[i];
};
console.log(animals);

//random string generator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
randomString = "";
while (randomString.length < 10){
	
	randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
	randomString.length++;

	
};
console.log(randomString);

 


//why doesn't it allow me to say randomString += randomCharacter? If I do that
//-->I get a a string of SAME characters, e.g. uuuuuuuuuu

//turning normal strings into h4ck3r sp34k
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {

	if (input[i] === "a") {
		output = 4;
	} else if (input[i] === "e") {
		output = 3;
	} else if (input[i] === "i") {
		output = 1;
	} else if (input[i] === "o") {
		output = 0;
	} else {
		output = input[i];
	};
	
	console.log(output);
	
};









