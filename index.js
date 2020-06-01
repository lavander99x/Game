//Get the name of players
var n1 = prompt("what's your name ?");
var n2 = prompt("What's your friend name ?");
var a = n1.toUpperCase();
var b = n2.toUpperCase();
document.querySelectorAll("p")[0].innerHTML = a;
document.querySelectorAll("p")[1].innerHTML = b;

// RANDOM PICTURE
document.querySelector("button").addEventListener("click",function(){
  var audio = new Audio('sound/crash.mp3');
  audio.play();
  var x =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  var y =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  var random1 = "images/"+x+".png";
  var random2 = "images/"+y+".png";
  document.querySelectorAll("img")[0].setAttribute("src",random1);
  document.querySelectorAll("img")[1].setAttribute("src",random2);
})
