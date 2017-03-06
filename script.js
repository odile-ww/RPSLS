/* The idea of this program is to equate the strings "rock", "paper", "scissors", "lizard", "Spock" to numbers and use these numbers to calculate the winning conditions */

//helper function that takes player imput and converts it into numbers, in order to be compared with the one of the computer later on
function nameToNum(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice == "rock") {
    return 0;
  } else if (playerChoice == "spock") {
    return 1;
  } else if (playerChoice == "paper") {
    return 2;
  } else if (playerChoice == "lizard") {
    return 3;
  } else if (playerChoice == "scissors"){
    return 4;
  } else {
    alert("Please enter a correct choice.");
    window.location.reload();
  }
};

//helper function that will convert the computer number into text, for feedback to the player
function numToName(number) {
    if (number == 0) {
    return "rock";
  } else if (number == 1) {
    return "spock";
  } else if (number == 2) {
    return "paper";
  } else if (playerChoice == 3) {
    return "lizard";
  } else if (playerChoice == 4){
    return "scissors";
  } else {
    alert("Please enter a correct choice.");
    window.location.reload();
  }
}

//print player and computer choices
var submit = document.querySelector("#submit");
submit.addEventListener("click", function() {
  //capture player's choice convert it into a number, for comparison with the computer number
  var playerChoice = document.getElementById("playerChoice").value;
  playerNum = nameToNum(playerChoice);
  console.log(playerNum);
  //generate computer number and convert it into one of the game's choices
  var compNum = Math.floor((Math.random() * 5));
  var compChoice = numToName(compNum);
  console.log(compNum);
  document.getElementById("playerResult").innerHTML = playerChoice;
  document.getElementById("compResult").innerHTML = compChoice;
  //calculate the outcome
  var difference = (compNum - playerNum);
  //workaround to modulo returning negative numbers in JS
  var result = difference - (5 * Math.floor(difference/5));
  //print feedback on outcome
  if (result >= 1 && result < 3) {
    document.getElementById("score").innerHTML = "Computer wins!";
    document.getElementById("score").style.color = "red";
  } else if (result >= 3 && result < 5)  {
    document.getElementById("score").innerHTML = "You Win!";
    document.getElementById("score").style.color = "#1d9000";
  } else {
    document.getElementById("score").innerHTML = "It's a tie!";
    document.getElementById("score").style.color = "#ffaa2f";
  }
  console.log(result);
});



