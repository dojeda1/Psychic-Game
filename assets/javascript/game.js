// set beginning variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var allGuesses = [];

document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;

// computer chooses random letter

function compNum() {
    return Math.floor(Math.random() * 26) + 65;
}

var compLetter = String.fromCharCode(compNum());

var compFinal = compLetter.toLowerCase();

// only alphabetic keys register

document.addEventListener("keyup", checkKeyPress);

function checkKeyPress(key) {

    var keyPress = event.key.toLowerCase();

    if (key.keyCode >= "65" && key.keyCode <= "90") {
        console.log("Player Guess: " + keyPress);

        if (allGuesses.indexOf(keyPress) === -1) {

            allGuesses.push(keyPress);
            console.log(allGuesses);

            if (keyPress === compFinal) {
                console.log("the same");
                wins++;
                allGuesses = [];
                document.getElementById("winCount").innerHTML = wins;
                guessesLeft = 10;
                document.getElementById("guessCount").innerHTML = guessesLeft;
                document.getElementById("guessList").innerHTML = "";

                document.getElementById("previousLetter").innerHTML = "Correct! It was <span class='text-success font-weight-bold text-uppercase'>" + compFinal + "</span>.";

                compLetter = String.fromCharCode(compNum());

                compFinal = compLetter.toLowerCase();

            } else {

                if (guessesLeft > 1) {
                    console.log("nope");
                    guessesLeft--;
                    document.getElementById("guessCount").innerHTML = guessesLeft;
                    document.getElementById("guessList").innerHTML = document.getElementById("guessList").innerHTML + keyPress + " ";

                } else {
                    console.log("you lose")
                    guessesLeft = 10;
                    losses++;
                    allGuesses = [];
                    document.getElementById("lossCount").innerHTML = losses;
                    document.getElementById("guessCount").innerHTML = guessesLeft;
                    document.getElementById("guessList").innerHTML = "";

                    document.getElementById("previousLetter").innerHTML = "Wrong! It was <span class='text-danger font-weight-bold text-uppercase'>" + compFinal + "</span>.";

                    compLetter = String.fromCharCode(compNum());

                    compFinal = compLetter.toLowerCase();

                }
            }

        } else {

            console.log("duplicate letter")
        }

    } else {
        console.log("invalid key")
    }


}