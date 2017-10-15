//   Global Scope
//  ===================================================================================================================================================================================
var wordOptions = ["pad see ew", "tom yam gai", "steak", "sushi", "sashimi", "mangostien"];
var selectWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount =0;
var guessesLeft =7;



//   functions
//   ====================================================================================================================================================================================
function start () {
    selectedWord = wordOptions[Math.floor(Math.random() *wordOptions.length)]
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    guessesLeft = 7;
    rongLetters = [];
    blankAndSuccesses = [];
    
   
    

    //hangman guesses check loop
    for (var i=0; i<numBlanks; i++){
        blankAndSuccesses.push("_");
        
    }
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("win").innerHTML = winCount;
    document.getElementById("loss").innerHTML = lossCount

    console.log ("Hi this is our chosen word", selectWord);
    console.log ("# of letters in the selected word", lettersInWord);
    console.log (blankAndSuccesses);
    console.log (i);


}
function checkLetters(letter) {
    var lettersInWord = false;
    for (var i = 0; i<numBlanks; i++){
        if(selectWord[i] == letter) {
    islettersInWord = true;
    
    }
}
if (lettersInWord){
for (var i=0; i<numBlanks; i++) {
    if(selectWord[i] == letter) {
        blankAndSuccesses[i] = letter;
            }
        }
    }
else{
    wrongLetters.push(letter);
    guessesLeft--
}
console.log(blankAndSuccesses);

}
function roundComplete(){
    console.log("wins" + winCount + "| lossCount" +lossCount + "| guessesleft" + guessesLeft);
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.toString();
    if (lettersInWord.toString() == blankAndSuccesses.toString()){
        winCount++;
        alert("winner winner chicken dinner!");
        document.getElementById("win").innerHTML = winCount;

        start()
     }
     else if (guessesLeft == 0) {
         lossCount++;
         alert("Loser!");
         document.getElementById("loss").innerHTML = lossCount;
        
         start();
    }   
}



document.onkeyup = function(event){
   var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
checkLetters(letterGuessed);
roundComplete();

 console.log(letterGuessed);  

}
function newFunction() {
    ;
}
