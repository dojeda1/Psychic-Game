var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("guessCount").innerHTML = guessesLeft;





// computer chooses random letter


function compNum() {
    return Math.floor(Math.random() * 26) + 65;


}

var compLetter = String.fromCharCode(compNum());

var compFinal = compLetter.toLowerCase();

console.log(compLetter);
console.log(compFinal);


document.addEventListener("keyup", checkKeyPress);

// only alphabetic keys register

function checkKeyPress(key) {

    var keyPress = event.key.toLowerCase();


    if (key.keyCode >= "65" && key.keyCode <= "90") {
        console.log("Player Guess: " + keyPress);

        if (keyPress === compFinal) {
            console.log("the same");
            wins++;
            document.getElementById("winCount").innerHTML = wins;
            guessesLeft = 10;
            document.getElementById("guessCount").innerHTML = guessesLeft;
            document.getElementById("guessList").innerHTML = "";

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
                document.getElementById("lossCount").innerHTML = losses;
                document.getElementById("guessCount").innerHTML = guessesLeft;
                document.getElementById("guessList").innerHTML = "";

            }
        }

    } else {
        console.log("invalid key")
    }


}