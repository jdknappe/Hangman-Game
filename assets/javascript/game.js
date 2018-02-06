function processKeyPress() {
    var key 
    var guessCount
    var currentWord
    var wins
    var losses
    var guessRemain 
    var wordArray = ["Creed", "Hoobastank", "Sublime"];
    var guessedLetters 
    var outString
    var correctGuesses
    var underScores = "_______________"
    // Initialize
    var keyText = document.getElementById("anyKeyStart");
    key = keyText.innerHTML;

    outString = underScores.substr(0, currentWord.length)
    document.getElementById("currentWord").innerHTML = outString; 
    correctGuesses = currentWord.length
    document.getElementById("guessRemain").innerHTML = outString; 
    currentWord = wordArray[Math.floor((Math.random() * currentWord.length) + 1)]
    guessCount = currentWord.length + 5;
    document.getElementById("guessRemain").innerHTML = outString; 
    if (!guessedLetters.includes(key)) {
        if (currentWord.includes(key)) {
            for (i = 0; i < currentWord.length; i++){
                if (currentWord[i] == key) {
                    outString[i] = key;
                    correctGuesses--;
                }
            }   
        }
        guessCount--;
        guessedLetters + key
    }
    document.getElementById("currentWord").innerHTML = outString;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
}