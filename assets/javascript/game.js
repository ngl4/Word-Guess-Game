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


//code extracted from stack overflow
String.prototype.replaceAt=function(index, char) {
  var a = this.split("");
  a[index] = char;
  return a.join("");
}


 //Displaying the Dashes
 document.getElementById("word-guess").textContent = displayDashes;


//function for showing images 
 function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;

  // This next line will just add it to the <body> tag
  document.getElementById('anime-image').appendChild(img);
}

show_image("assets/images/naruto.jpg", 
                     276, 
                     110, 
                     'Naruto'); 




document.onkeyup = function(event) {
  //the user clicks on a random key
  var userGuess = event.key; //??? how to make all user iput to be uppercase

  console.log(userGuess);


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
    //includes() will return true or false

    console.log("it matches!");


    //displayDashes being replaced by the correct userGuess 
    for (var i=0 ; i < displayLetters.length; i++) {

      if (userGuess === displayLetters[i]) {
      
          console.log(i);
      
          var char = displayLetters.charAt(i);
      
          displayDashes = displayDashes.replaceAt(i, char);
      
          document.getElementById("word-guess").textContent = displayDashes;
      
          
      }
    }

    //Problem: logic for wins number
    //Solution: when it displaydashes is filled up with displayLetters, the winNum will go up by 1;
    //And the page will reload again!

   



    if (displayDashes === displayLetters) {

      winNum += 1;

      // if ("n a r u t o"){

      //   //????Problem: Not Displaying ---- solve image issue

      //   show_image("./images/naruto.jpg", 
      //                276, 
      //                110, 
      //                'Naruto'); 
      //  }


      //location.reload();  
      //Problem: page can reload but the winNum should not change ?????


    }else {


    }


}
    
  else {
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
  document.getElementById("win-num").textContent = winNum;
};
