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

var audio = new Audio();

function playSong(url) {
  audio.src = url;
  audio.play();
}

function pauseSong(url) { 
  audio.src = url;
  audio.pause(); 
}

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

//Displaying the Dashes
document.getElementById("word-guess").textContent = displayDashes;

//replaceAt code extracted from stack overflow
String.prototype.replaceAt = function(index, char) {
  var a = this.split("");
  a[index] = char;
  return a.join("");
};

var imgElement = document.getElementById("anime-image");

//function for showing images using a suggestion from stack overflow
function show_image(src, width, height, style, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.style = style;
  img.alt = alt;
  
  // This next line will just add it to the <div> tag
  document.getElementById("anime-image").appendChild(img);
  console.log(img);
}


//Create a button TryAgain
var button = document.getElementById("tryAgain");
button.style.display = "none";
button.onclick = tryAgain;


//tryAgain function is to generate a new word that is different from the previous computerChoice
function tryAgain() {
  userGuessArr = [];

  //remove a chosen computerChoice index from the array
  var rmIndex = animeArr.indexOf(computerChoice);
  animeArr.splice(rmIndex, 1);
  console.log(animeArr);

   //Remove Image
   if (computerChoice === "naruto") {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/naruto.mp3");

   }else if (computerChoice === "ponyo" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/ponyo.mp3");

   }else if (computerChoice === "bleach" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/bleach.mp3");

   }else if (computerChoice === "your name" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/yourname.mp3");
    
   }else if (computerChoice === "dragon ball" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/dragonball.mp3");
    
   }else if (computerChoice === "akira" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/akira.mp3");
    
   }else if (computerChoice === "paprika" ) {

    while (imgElement.firstChild) {
      imgElement.removeChild(imgElement.firstChild);
      
    }

    pauseSong("assets/music/paprika.mp3");
    
   }

  //Randomly generate a new computerChoice
  computerChoice = animeArr[Math.floor(Math.random() * animeArr.length)];
  console.log(computerChoice);

  computerChoiceDashes = [];
  computerChoiceContainer = [];

  for (i = 0; i < computerChoice.length; i++) {
    computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));
  
    displayDashes = computerChoiceDashes.join(" ");
  }
  
  for (i = 0; i < computerChoice.length; i++) {
    computerChoiceContainer.push(computerChoice[i]);
  
    displayLetters = computerChoiceContainer.join(" ");
  }

  document.getElementById("word-guess").textContent = displayDashes;

 


  //hide the button & image
  button.style.display = "none";
}


//Create a button playAgain
var buttonRestart = document.getElementById("restartAgain");
buttonRestart.style.display = "none";
buttonRestart.onclick = restartAgain;

function restartAgain () {

  location.reload(); 

}




//setting time to be refreshed
// function timeRefresh(timeoutPeriod) {
//   setTimeout("location.reload(true);", timeoutPeriod);
// }

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
    userGuessArr.push(userGuess);

    if (guessLeft === 0) {
      guessLeft = 12;
      userGuessArr = [];

      if (displayLetters === "n a r u t o") {
        show_image("assets/images/naruto.jpg", 376, 410, "display: block;", "Naruto");
        playSong("assets/music/naruto.mp3");
      } else if (displayLetters === "p o n y o") {
        show_image("assets/images/ponyo.jpeg", 376, 510, "display: block;", "Ponyo");
        playSong("assets/music/ponyo.mp3");
      } else if (displayLetters === "a k i r a") {
        show_image("assets/images/akira.jpg", 376, 410, "display: block;", "Akira");
        playSong("assets/music/akira.mp3");
      } else if (displayLetters === "y o u r   n a m e") {
        show_image("assets/images/yourname.jpg", 376, 580, "display: block;", "Your Name");
        playSong("assets/music/yourname.mp3");
      } else if (displayLetters === "b l e a c h") {
        show_image("assets/images/bleach.jpg", 376, 510, "display: block;", "Bleach");
        playSong("assets/music/bleach.mp3");
      } else if (displayLetters === "d r a g o n   b a l l") {
        show_image("assets/images/dragonball.jpg", 376, 450, "display: block;", "Dragon Ball");
        playSong("assets/music/dragonball.mp3");
      } else if (displayLetters === "p a p r i k a") {
        show_image("assets/images/paprika.jpg", 376, 510, "display: block;", "Paprika");
        playSong("assets/music/paprika.mp3");
      }

      //timeRefresh(5000 * 3);
    }

    //reloading the page after 12 guesses are used up
    //computerChoice will be refreshed too with another new word

    //Problem: Display the final answer even user cannot guess out the letter

    //make button visible
    button.style.display = "block";
    buttonRestart.style.display = "block";
  }

  if (computerChoice.includes(userGuess)) {
    //includes() will return true or false

    console.log("it matches!");

    //displayDashes being replaced by the correct userGuess
    for (var i = 0; i < displayLetters.length; i++) {
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
      guessLeft = 12;

      userGuessArr = []; //issue of pushing the last letter to a new empty array

      //make button visible
      button.style.display = "block";
      buttonRestart.style.display = "block";
      //timeRefresh(5000*3);

      //Problem: page can reload but the winNum should not change ?????
    }

    if (displayDashes === "n a r u t o") {
      show_image("assets/images/naruto.jpg", 376, 410, "display: block;","Naruto");
      playSong ("assets/music/naruto.mp3");
    } else if (displayDashes === "p o n y o") {
      show_image("assets/images/ponyo.jpeg", 376, 510, "display: block;","Ponyo");
      playSong("assets/music/ponyo.mp3");
    } else if (displayDashes === "a k i r a") {
      show_image("assets/images/akira.jpg", 376, 410, "display: block;","Akira");
      playSong("assets/music/akira.mp3");
    } else if (displayDashes === "y o u r   n a m e") {
      show_image("assets/images/yourname.jpg", 376, 580, "display: block;","Your Name");
      playSong("assets/music/yourname.mp3")
    } else if (displayDashes === "b l e a c h") {
      show_image("assets/images/bleach.jpg", 376, 510, "display: block;","Bleach");
      playSong("assets/music/bleach.mp3");
    } else if (displayDashes === "d r a g o n   b a l l") {
      show_image("assets/images/dragonball.jpg", 376, 450, "display: block;","Dragon Ball");
      playSong("assets/music/dragonball.mp3");
    } else if (displayDashes === "p a p r i k a") {
      show_image("assets/images/paprika.jpg", 376, 510, "display: block;","Paprika");
      playSong("assets/music/paprika.mp3");
    }
  } else {
    console.log("not matches");
  }

  //display all userGuess into html

  document.getElementById(
    "letters-already-guess"
  ).textContent = userGuessArr.join(", ");

  //Display guessLeft to html

  document.getElementById("guess-left").textContent = guessLeft;

  //Display Wins-number to html
  document.getElementById("win-num").textContent = winNum;
};
