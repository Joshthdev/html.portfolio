var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomimage = "/images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomimage);






var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomimage = "/images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomimage);


if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1" ).innerHTML = "Player 1 wins"
}
else {
    document.querySelector(".container h1").innerHTML = "Player 2 wins"
};
















































