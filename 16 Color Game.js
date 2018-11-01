var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
 setUpModeButtons();
 setUpSquares();
 reset();
}

function setUpModeButtons (){
for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //short way of writing one line if statement(shown below)
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }

}

function setUpSquares(){
for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked squares
      var clickedColor = this.style.background;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;

      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }

}


function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //disappear default message when click reset
  messageDisplay.textContent = " ";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.background = "steelblue";
}

//what RESET button will do
resetButton.addEventListener("click", function() {
  //changing all the code below with only reset() in new version
  reset();

})

//for changing all squares colors to right answer color
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = color;
  }
}

//choosing a random RGB(numbers) color for start
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generate random colors(6 squares) for start
function generateRandomColors(num) {
  //make an array
  var arr = []
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into arr(array)
    arr.push(randomColor())
  }
  //return that array 
  return arr;
}

function randomColor() {
  //pick a "red" from 0 -255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 -255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 -255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}