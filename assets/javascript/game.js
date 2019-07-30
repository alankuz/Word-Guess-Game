var words = [
  "country",
  "edm",
  "rock",
  "metal",
  "classical",
  "rap",
  "jazz",
  "reggae",
  "punk",
  "folk",
  "dubstep",
  "alternative"

];
// Global Varibles/HTML ID---------------------
wins = 0;
rounds = 1;
var win = document.getElementById("wins");
var round = document.getElementById("rounds");
var again = document.getElementById("resetbtn");
var stand = document.getElementById("standing");
var targetDiv = document.getElementById("lettersGuessed");
var guessDiv = document.getElementById("guesses");
var ansDiv = document.getElementById("theWord");
var roundNum = document.getElementById("rounds");
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
wordTwo = word.split('');
var remainingLetters = word.length;
var guessArray = [];
var guessesLeft = 6;
var gameOver = false;


// Array creator -------------------------------------------------
console.log(wordTwo);
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
  ansDiv.textContent = answerArray.join(' '); //  Remove commas.
}
// word match checker, answer array fill-------------------------------
answerLog = function (ke) {
  guessArray.push(ke);
  var isLetter = false;
  targetDiv.textContent = guessArray.join(' ');

  for (var i = 0; i < word.length; i++) {
    // checks if keyentry fits the word loaded--------
    if (ke === word[i]) {
      console.log("if");
      isLetter = true;
      console.log("Pressed/rightletter " + ke + " " + word[i]);
      answerArray[i] = ke
      ansDiv.textContent = answerArray.join(' ');
      console.log(answerArray);
      console.log("winner------ " + answerArray.toString() + "----" + wordTwo.toString())
      // If all charactors match with the full word then this will give you a win-----
      if (wordTwo.toString() === answerArray.toString()) {
        again.style.display = "block";
        wins++;
        win.textContent = 'Wins: ' + wins;
        stand.textContent = 'You WIN!!';
        stand.style.display = "block";
        gameOver = true;
      }
    }
  }
  // if the word does not match it will set this off giving you a loss of life
  if (!isLetter) {
    console.log("else");
    guessesDone();
  }

  if (guessesLeft < 1) {
    ke = " "
  }
}
// key entry function, allows the keys to be read and also checks if you have used all guesses------
document.onkeyup = function (keyEntry) {
  if (keyEntry.keyCode >= 65 && keyEntry.keyCode <= 90) {
    if (gameOver === false) {
      var keFix = keyEntry.key;
      var ke = keFix.toLocaleLowerCase();
      console.log(keyEntry.keyCode)
      keyCheck = guessArray.indexOf(ke);
      if (keyCheck < 0) {
        answerLog(ke);
      }
    } else {
      alert('To play again press "Next Round"')
    }

  }
  else {
    alert('Not Valid Entry. Letters only.')
  }
}
// Tells you how many guesses you have left before you lose. 
guessesDone = function () {
  var x = 1;
  guessesLeft = (guessesLeft - x);
  guessDiv.textContent = guessesLeft;
  if (guessesLeft < 1) {
    again.style.display = "block";
    win.textContent = 'Wins: ' + wins;
    stand.textContent = 'You Lose...';
    stand.style.display = "block";
    gameOver = true;

  }
}
// Game reset function, used to get back to square one and to set up new rounds win||lose-------
var reset = function () {
  gameOver = false;
  again.style.display = "none";
  stand.style.display = "none";
  guessesLeft = 6;
  roundNum.textContent = 'Rounds: ' + rounds;
  guessDiv.textContent = guessesLeft;
  guessArray = [];
  answerArray = [];
  targetDiv.textContent = guessArray;
  rounds++
  round.textContent = 'Rounds: ' + rounds;
  word = words[Math.floor(Math.random() * words.length)];
  for (var i = 0; i < word.length; i++) {
    gImages()
    answerArray[i] = "_";
    ansDiv.textContent = answerArray.join(' ');
  }
  wordTwo = word.split('');
}
// Loads the information on the screen before you begin--------------
win.textContent = 'Wins: ' + wins;
round.textContent = 'Rounds: ' + rounds;
guessDiv.textContent = guessesLeft;
// Function to match the word with the picture-----------------------
function gImages() {
  if (word === words[0]) {
    document.getElementById("img").src = "assets/images/country.jpg";
  }
  if (word === words[1]) {
    document.getElementById("img").src = "assets/images/edm.jpg";
  }
  if (word === words[2]) {
    document.getElementById("img").src = "assets/images/rock.jpg";
  }
  if (word === words[3]) {
    document.getElementById("img").src = "assets/images/metal.jpg";
  }
  if (word === words[4]) {
    document.getElementById("img").src = "assets/images/classical.jpg";
  }
  if (word === words[5]) {
    document.getElementById("img").src = "assets/images/rap.jpg";
  }
  if (word === words[6]) {
    document.getElementById("img").src = "assets/images/jazz.jpg";
  }
  if (word === words[7]) {
    document.getElementById("img").src = "assets/images/reggae.jpg";
  }
  if (word === words[8]) {
    document.getElementById("img").src = "assets/images/punk.jpg";
  }
  if (word === words[9]) {
    document.getElementById("img").src = "assets/images/folk.jpg";
  }
  if (word === words[10]) {
    document.getElementById("img").src = "assets/images/dubstep.jpg";
  }
  if (word === words[11]) {
    document.getElementById("img").src = "assets/images/alternative.jpg";
  }
}

// Loads above picutre to word function-----------------------
gImages()

