//variables

//array to hold letters for computer to pick
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variable to hold number wins/losses/guesses
var wins = 0;
var losses = 0;
var guesses = 10;
//computer chooses variable at random
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)

//if player presses a key, on key up runs function event 

document.onkeyup = function (event) {
var userGuess = event.key; //naming the userGuess variable, which is whatever key the user guesses
console.log(userGuess) //display guess to console for debugging

//if else statement for active gameplay
if (userGuess === computerChoice) { //if player key selection matches letter of computer choice
  wins++; //add one to the wins variable
  alert("Congrats, you won! The correct answer was " + computerChoice); //alert player when they win
  reset() //call reset function
}

else if (guesses === 0) { //if the player guess does not match and the number of guesses remaining is zero, then this occurs
  losses++  //add one to losses variable
  alert("Out of guesses! Please try again!"); //alert player that they are out of guesses
  reset() //call reset function
} else { //if the player guess does not match but the number of guesses is not zero
  guesses-- //decreases guesses by one
  var textnode = document.createTextNode(userGuess + ", ");  //create a variable to hold player guesses and put it in the alreadyguessed HTML <p> tag, and add to it each guess and a comma separator
  document.getElementById("alreadyguessed").appendChild(textnode);   //appendChild adds each variable 

}

document.getElementById('wins').innerHTML = "Games Won: " + wins; //put number of wins/losses/guesses in a <p> tag so the player can see it
document.getElementById('losses').innerHTML = "Games Lost: " + losses;
document.getElementById('guesses').innerHTML = "Guesses Remaining: " + guesses;

}

function reset() { //after each game completes, this is run to choose a new letter, reset guesses, and clear the already guessed value
computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
guesses = 10;
document.getElementById("alreadyguessed").innerHTML = "Already Guessed: ";
}
