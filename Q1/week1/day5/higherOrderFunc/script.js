
// myFunc(); //this works
//
function myFunc(){
  console.log("Good morning")
}
// console.log(myFunc2) // undefined
// myFunc2()// error
var myFunc2 = function(){
  console.log("TGIF");
}
//
// myFunc2();// this works here



// setInterval(function(){
//  alert("HI");
// }, 3000);


var annoy = function(){
  alert("hey you!");
}

//setInterval(annoy, 3000);

var date = function(){
  var now = new Date();
  console.log(now);
}

//setInterval(date, 2000);

var myFunc = function(){
  console.log("Hi there!");
}

function higherOrderFunc(done){
  done();
}

higherOrderFunc(myFunc); // Hi there!
