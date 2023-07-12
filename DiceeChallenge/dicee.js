//dice1
var randomNumber1= Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1; //1-6

var randomDiceImage = "dice"+randomNumber1+".png" //dice1.png-dice6.png

var randomImageSource = "images/"+randomDiceImage; //images/dice1.png- images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//dice2
var randomNumber1= Math.random();
randomNumber2 = randomNumber1*6;
randomNumber2=Math.floor(randomNumber2)+1; //1-6

var randomImageSource2 = "images/dice"+randomNumber2+".png"; //images/dice1.png- images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//winner or loser
if(randomImageSource > randomImageSource2){
    document.querySelector("h1").innerHTML = "player 1 Wins!🚩";
}
else if(randomImageSource2 > randomImageSource){
    document.querySelector("h1").innerHTML = "player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw😁";
}