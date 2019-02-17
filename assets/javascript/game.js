// document.onkeyup = function (event) {

//     var keyPress = event.key.toLowerCase();

//     if (keyPress === "1") {


//         console.log(keyPress)
//     } else {
//         console.log("invalid")
//     }
// }

document.addEventListener("keyup", checkKeyPress);

function checkKeyPress(key) {

    var keyPress = event.key.toLowerCase();

    if (key.keyCode >= "65" && key.keyCode <= "90") {
        console.log(keyPress);
    } else {
        console.log("invalid key")
    }


}