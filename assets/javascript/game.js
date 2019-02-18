// document.onkeyup = function (event) {

//     var keyPress = event.key.toLowerCase();

//     if (keyPress === "1") {


//         console.log(keyPress)
//     } else {
//         console.log("invalid")
//     }
// }




function compNum() {
    return Math.floor(Math.random() * 26) + 65;
}

var compLetter = String.fromCharCode(compNum());

var compFinal = compLetter.toLowerCase();

console.log(compLetter);
console.log(compFinal);

document.addEventListener("keyup", checkKeyPress);


function checkKeyPress(key) {

    var keyPress = event.key.toLowerCase();


    if (key.keyCode >= "65" && key.keyCode <= "90") {
        console.log("Player Guess: " + keyPress);

        if (keyPress === compFinal) {
            console.log("the same")
        } else {
            console.log("nope")
        }

    } else {
        console.log("invalid key")
    }


}