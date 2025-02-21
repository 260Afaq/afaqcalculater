// function getvalue(number){
//     var input=document.getElementById("input")
//     console.log("getvlaue",number);
//     input.value= number;
// }
function getValue(value) {
    console.log("getValue", value);
    var input = document.getElementById("input");
    input.value += value;
  }

  function allClear(){
    
    var input = document.getElementById("input")
    input.value ="";
  }

  function equalTo(){
    var input = document.getElementById("input");
    var result = eval(input.value);
    input.value  = result
  }

  function Clear() {
    var input = document.getElementById("input");
    input.value = (0);
    
  }