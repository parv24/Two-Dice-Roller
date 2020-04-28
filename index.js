var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);
var a=document.querySelector(".img1");
var b=document.querySelector(".img2");
var sa ="images/dice"+randomNumber1+".png";
var sb ="images/dice"+randomNumber2+".png";
a.src=sa;
b.src=sb;
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player1 wins!";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
  document.querySelector("h1").innerHTML="It's a draw!";
}
