//declare variables: 1. Array of anime words 2. win 3. guess-left 4. array for already guessed letters
//5. userGuess

var animeArr = [
  "naruto",
  "bleach",
  "dragon ball",
  "your name",
  "ponyo",
  "paprika",
  "akira"
];

var winNum = 0;
var guessLeft = 12;

var userGuessArr = []; //Aready guess letters
var computerChoiceDashes = [];
var computerChoiceContainer = [];

//Global scope for computer choice to avoid any frequent changes with every keys pressed
var computerChoice = animeArr[Math.floor(Math.random() * animeArr.length)];
//Anime Arr will be chosed by the computer of the specific items to be guessed

console.log(computerChoice);

for (i = 0; i < computerChoice.length; i++) {
  computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));

  var displayDashes = computerChoiceDashes.join(" ");
}



for (i = 0; i < computerChoice.length; i++) {
  computerChoiceContainer.push(computerChoice[i]);

  var displayLetters = computerChoiceContainer.join(" ");
}





document.onkeyup = function(event) {
  //the user clicks on a random key
  var userGuess = event.key; //??? how to make all user iput to be uppercase

  console.log(userGuess);



    //Displaying the Dashes
    document.getElementById("word-guess").textContent = displayLetters;
    document.getElementById("word-guess").textContent = displayDashes;
    




  //Problem----Condition: userGuess cannot be entered repetitively
  //Solution -- using includes method to compare and return false to stop the keyon function working

  if (userGuessArr.includes(userGuess)) {
    return false;
  }

  if (userGuess !== computerChoice.includes(userGuess)) {
    guessLeft -= 1;

    if (guessLeft === 0) {
      userGuessArr = [];
      guessLeft = 12;
      location.reload();
      //reloading the page after 12 guesses are used up
      //computerChoice will be refreshed too with another new word

      //Problem: Display the final answer even user cannot guess out the letter
    }
  }

  if (computerChoice.includes(userGuess)) {
    //includes will return true or false

    console.log("it matches!");

    //Problem: display the matches  (with underscore)\



    if (displayLetters.indexOf(userGuess)) {

    // for (var i = 0; i < displayLetters.length; i++) {

    
      console.log(displayLetters.charAt(displayLetters.indexOf(userGuess)));
      
      // }
  
    } else {

      console.log("not found");
    }



  
    //Problem: logic for wins number
  } else {
    console.log("not matches");
  }

  //display all userGuess into html
  userGuessArr.push(userGuess);
  document.getElementById(
    "letters-already-guess"
  ).textContent = userGuessArr.join(", ");

  //Display guessLeft to html

  document.getElementById("guess-left").textContent = guessLeft;

  //Display Wins-number to html
};
