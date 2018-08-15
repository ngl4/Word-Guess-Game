//declare variables: 1. Array of anime words 2. win 3. guess-left 4. array for already guessed letters
//5. userGuess

var animeArr = [
  "Naruto",
  "Bleach",
  "Dragon Ball",
  "Spirited Away",
  "Ponyo",
  "Paprika",
  "Akira",
  "Ghost in the shell"
];

var winNum = 0;
var guessLeft = 12;

var userGuessArr = []; //Aready guess letters

document.onkeyup = function(event) {
  //the user clicks on a random key
  var userGuess = event.key; //??? how to make all user iput to be uppercase

  //Anime Arr will be chosed by the computer of the specific items to be guessed
  var computerChoice = animeArr[Math.floor(Math.random() * animeArr.length)];
  //???show all the items in uppercase

  //display all userGuess into html
  userGuessArr.push(userGuess);
  document.getElementById(
    "letters-already-guess"
  ).textContent = userGuessArr.join(", ");

  //???how to access to a specific letters of the word ???? create another logic within ComputerChoice?
};
