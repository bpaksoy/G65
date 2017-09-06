// var el = document.querySelector("button");
// el.addEventListener("click", function(){
//   alert("You clicked me!");
// });
//
// var el2 = document.querySelector("p");
// el2.addEventListener("click", function(event){
//   //console.log(event);// prints out the type of the event
//   el2.style.color = "yellow";
//   console.log(event.target.textContent);// I love Romeo prints out to the console
// });
// var myAlert = function(){
//   alert("Clicking again");
// }
//
// el.addEventListener("click", myAlert);
//
// // document.querySelector("body").addEventListener("click", function(){
// //  document.querySelector("body").innerHTML = "<h1>This is new!</h1>";
// //  console.log("Hi Mom");
// // });
//
// document.body.addEventListener("click", function(event){
//   console.log(event.target.textContent);
// });
//

var p1 = document.querySelector("#par1");
var p2 = document.querySelector("#par2");


p1.addEventListener("click", function(event){
  console.log("You have clicked par1", event.target.textContent);
});


p2.addEventListener("click", function(event){
  console.log("You have clicked par2", event.target.textContent);
});


var pars = document.querySelectorAll("p");

for(var i =0; i < pars.length; i++){
  pars[i].addEventListener("click", function(event){
    console.log(event.target.textContent);
  });
}
