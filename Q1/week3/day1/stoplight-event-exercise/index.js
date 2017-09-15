var count = 0;
(function() {
  'use strict';
   var stopButt = document.querySelector("#stopButton");
   var stopLight = document.querySelector("#stopLight");



 stopButt.addEventListener("click", function(){
     stopLight.classList.toggle("stop");
     count++;
  });


   var slowButt = document.querySelector("#slowButton");
   var slowLight = document.querySelector("#slowLight");
   var slow = slowButt.addEventListener("click", function(){
    slow = slowLight.classList.toggle("slow");
   });
   var goButt = document.querySelector("#goButton");
   var goLight = document.querySelector("#goLight");
   var go = goButt.addEventListener("click", function(){
     go = goLight.classList.toggle("go");
   });

   stopButt.addEventListener("mouseenter", function(){
     console.log("Entered " + stopButt.textContent + " button");
   });

   stopButt.addEventListener("clickleave", function(){
     console.log(stopLight.textContent + " bulb off")
   });
   stopButt.addEventListener("mouseleave", function(){
     console.log("Left " + stopButt.textContent + " button");
   });

   slowButt.addEventListener("mouseenter", function(){
     console.log("Entered " + slowButt.textContent + " button");
   });
   slowButt.addEventListener("mouseleave", function(){
     console.log("Left " + slowButt.textContent + " button");
   });

   goButt.addEventListener("mouseenter", function(){
     console.log("Entered " + goButt.textContent + " button");
   });
   goButt.addEventListener("mouseleave", function(){
     console.log("Left " + goButt.textContent + " button");
   });


  //  console.log(buttonList[0]);
  //  for(var i =0; i < buttonList.length; i++){
  //    if(stop || slow || go){
  //    buttonList[i].addEventListener("click", function(event){
  //       console.log(event.target.textContent + " bulb on");
  //       });
  //     }
  //    else{
  //      buttonList[i].addEventListener("click", function(event){
  //         console.log(event.target.textContent + " bulb off");
  //         });
  //     }
  //  }


  // YOUR CODE HERE
})();
console.log(count);
(function(){
  console.log(count);
  var buttonList = document.querySelectorAll(".button");
  if(count % 2 !== 0){
     buttonList[0].addEventListener("click", function(event){
        console.log(event.target.textContent + " bulb on");
        });
      }
     else{
       buttonList[0].addEventListener("click", function(event){
          console.log(event.target.textContent + " bulb off");
          });
      }

})();
