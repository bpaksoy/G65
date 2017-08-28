var myName = "Banu";

function myFunc(){
  var myLocalName = "Bubu";
}


var a = "outer";

function myFunc(){
  var a = "inner";
  console.log(a);
}

myFunc()// inner
