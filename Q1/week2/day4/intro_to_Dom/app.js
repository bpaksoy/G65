var getTitle = document.getElementsByTagName('h1');
console.log(getTitle);
var getH3 = document.getElementsByTagName("h3");
console.log(getH3);
var changeFood = document.getElementsByTagName("h3")[0];
console.log(changeFood);
changeFood.textContent = "Sorbets";

var changePizza = document.getElementsByTagName("h2")[0];
console.log(changePizza);
changePizza.textContent = "Pizza";
changePizza.style.color = "red";

var changeImg = document.getElementsByClassName("foodPic")[0];
console.log(changeImg);
changeImg.src = "http://fotostrasse.1982.us/wp-content/uploads/2014/10/Gozleme-Manti-01.jpg";

//Create New Elements
var iceCreamDescription = document.createElement('p');
iceCreamDescription.textContent = "Helado is great after pizza";
document.body.appendChild(iceCreamDescription);
