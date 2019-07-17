var words = [
    "COUNTRY",
    "EDM",
    "ROCK",
    "METAL",
    "CLASSICAL",
    "RAP",
    "JAZZ"

];
var ansDiv = document.getElementById("theWord");
var word = words[Math.floor(Math.random() * words.length)];
for (var i = 0; i < word.length; i++){
console.log(word[i]);
}


var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
 ansDiv.textContent = answerArray;}

 for (var i = 0; i < word.length; i++){
answerLog = function (){
if (keyEntry === word[0]) {
  answerArray[0].push(String.fromCharCode(charCode))
}
else {
  guessesDone ();
}
}}
var remainingLetters = word.length;
// document.onkeyup = keyEntry;

var targetDiv = document.getElementById("lettersGuessed");

// targetDiv.textContent = "Hello friends!";
// while (remainingLetters > 0) {
//     targetDiv.appendChild("div")
//     targetdiv.textContent = keyEntry;
//    }

// function(guessCount) {
//   for (i=0; i<12; i++){
  
//     }
// }
// if (guessArray.length = [12]){
//   alert("game over")}
var guessDiv = document.getElementById("guesses");





// keyEntry=function(guessSubtract){
//   if (keyEntry.key=true) {
//    guessesLeft -1;
//    guessDiv.textContent=guessesLeft
 
    
//   }

// }



// for (i=0; i<12; i++){

var keyEntry =document.onkeyup


var guessArray = [];
for (i=0; i<12; i++){
  console.log(words[i]);
document.onkeyup = function(keyEntry) {
console.log(keyEntry.key);
charCode=keyEntry.keyCode;
guessArray.push(String.fromCharCode(charCode));
// console.log(guessArray);
targetDiv.textContent = guessArray;
answerLog ();
}}

// for (i=0; i<12; i++){
  var guessesLeft = 12; 
guessesDone=function(){ 
  if (guessArray.length < 1){
    guessesLeft=12;}
  else if (guessesLeft > 0) {
  var x = 1;
guessesLeft = (guessesLeft - x);
}
else {
alert("You Lose Press F5")
}
// if (guessesLeft=0){
//   alert("gaveover");
// }
guessDiv.textContent = guessesLeft;}

// guessSubtract ();