// GLOBAL VARIABLES
// ==========================================================
// Arrays and Variables
var wordOptions = ["tremors", "alien", "predator", "holes", "casablanca", "jaws"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


// FUNCTIONS
// ==========================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_")
    }

    // Change HTML to relfect round and conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    // Testing
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // Check if letter exists in code
    var isLetterInWord = false;
    for (var i=0; i<numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    // Check where in word letters exists, then populate blanksAndSuccesses array.
    if(isLetterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    // Letter wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }

    // Testing and Debugging
    console.log(blanksAndSuccesses);
    
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

    // Update the HTML to reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("_");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("_");

    // Check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++
        alert("You won!");

        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount

        startGame();
    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++
        alert("You lost!");


        // Update the HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}


// MAIN PROCESS
// ==========================================================

// Initiates code the first time
startGame()

// Register keystrokes
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    roundComplete();
    // Testing / Debugging
    console.log(letterGuessed);
}