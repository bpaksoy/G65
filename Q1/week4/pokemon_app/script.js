var searchForm = document.querySelector("form");
searchForm.addEventListener("submit", function(event){
  event.preventDefault(); // prevents age from reload
  // console.log("is this working?");
  var searchTerm = document.querySelector("input").value;
  //console.log(searchTerm);
  $.get("https://pokeapi.co/api/v2/pokemon/"+ searchTerm +"/", function(data){
    document.querySelector("#pokeName").innerText = data.forms[0].name;
   var abilities =  data.abilities;
  //  for(var j =0; j < abilities.length; j++){
  //     var node = document.createElement("li");
  //     var textnode = document.createTextNode(abilities[j].ability.name);
  //     node.appendChild(textnode);
  //     document.querySelector("#listOne").appendChild(node);
  //   } // first approach

  var result = "";
  for(var i= 0; i < abilities.length; i++){
    result+= "<li>" + abilities[i].ability.name + "</li>"
  }
   document.querySelector("#listOne").innerHTML = result; // second approach

  });
});
