// FOR IMAGE 1

var randomNumber1=Math.floor(Math.random() *6)+1;
var randomImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// FOR IMAGE 2

var randomNumber2=Math.floor(Math.random() *6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

// FOR IMAGE 3
var randomNumber3=Math.floor(Math.random() *6)+1;
var randomImage3="images/dice"+randomNumber3+".png";
document.querySelectorAll("img")[2].setAttribute("src",randomImage3);

// FOR IMAGE 4
var randomNumber4=Math.floor(Math.random() *6)+1;
var randomImage4="images/dice"+randomNumber4+".png";
document.querySelectorAll("img")[3].setAttribute("src",randomImage4);

var num1=randomImage1+randomImage2;
var num2=randomImage3+randomImage4;

if(num1>num2){
  document.querySelector("h1").innerHTML="Player1 Wins🚩";
}
else if(num1<num2){
  document.querySelector("h1").innerHTML="Player2 Wins🚩";
}
else if(num1===num2) {
  document.querySelector("h1").innerHTML="😕Draw!";
}
