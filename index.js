if (window.performance.navigation.type === 1) {
    rollDice();
  }

var sound = new Audio();
sound.src = "./dice-1.mp3";



  function rollDice() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src", randomImageSource1);


if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h2").innerHTML = "🚩 Player 1 Wins"
}

else if ( randomNumber2 > randomNumber1 ) {
    document.querySelector("h2").innerHTML = "Player 2 Wins 🚩"
}

else {
    document.querySelector("h2").innerHTML = "Draw"
}
  }
