var numSquares = 3;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor;
var colors;
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var h1 = document.querySelector("h1")

setupSquares()
reset()

resetButton.addEventListener("click", function () {
    reset()
})

function reset() {
    colors = generateRandomColors(numSquares);
    //Picking a random rgb value from our array
    pickedColor = pickColor();
    //Change colorDisplay to math picked color
    colorDisplay.textContent = pickedColor;
    //set starting values for our DOM variables
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //Add click event to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.background;
            //compare to picked color
            if (clickedColor == pickedColor) {
                changeColors(clickedColor);
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //inside our loop: push our randomColor() into our array
        arr.push(randomColor())
    }
    //return that array
    console.log(arr)
    return arr
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]

}

function randomColor() {
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
