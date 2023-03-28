/*logic calc JS */

var  LastNumber    = 0 ;
var  CurrentNumber = String();
var  CurrentSymbol  = String();

function toScreen(symbol,numbers) {
  var symbolhtml= document.getElementById("symbol");
  symbolhtml.innerHTML = symbol;
  var numberhtml= document.getElementById("numbers");
  numberhtml.innerHTML = numbers;
}

function key(code) {
  if (typeof code == "number") {
    numberkeyAction(code);
  } else if (code == ".") {
    actionPoint();
  } else if (code == "+") {
    set_operation("+");
  } else if (code == "-") {
    set_operation("-");
  } else if (code == "*") {
    set_operation("*");
  } else if (code =="/") {
    set_operation("/");
  } else if (code == "=") {
    EQUAL_BUTTON();
  }


} 

function numberkeyAction(number) {

  if ((number == 0 && CurrentNumber != "" || number != 0)
     && CurrentNumber.length < 14 )  {
    let variableStr = number.toString();
    CurrentNumber += variableStr;
    toScreen(CurrentSymbol,CurrentNumber);
  } 
}

function actionPoint() {
  if (CurrentNumber == "") {
    CurrentNumber = "0.";
    toScreen("",CurrentNumber);
  } else if (CurrentNumber.indexOf(".") == -1 ) {
    CurrentNumber += ".";
    toScreen(CurrentSymbol,CurrentNumber);
  }
}

function set_operation(Symbol_input) {
  console.log("OREPACIONn INICIA------------------------")
  console.log(LastNumber)
  CurrentSymbol = Symbol_input;
  if (CurrentNumber == "" ) {
    LastNumber = 0;
  } else if (CurrentNumber.indexOf(".") == -1)  {
    LastNumber = parseInt(CurrentNumber);
  } else {
    LastNumber = parseFloat(CurrentNumber);
  } 
  console.log(LastNumber);
  CurrentNumber = "";
  if (CurrentSymbol == "" ) {
    EQUAL_BUTTON();
  }
  CurrentSymbol = Symbol_input;
  toScreen(CurrentSymbol,"0");
  console.log("OREPACIONn FINAL------------------------");
}


function EQUAL_BUTTON() {
  console.log("------------------------------");
  console.log("CURRENT SYMBOL:");
  console.log(CurrentSymbol);
  console.log("CURRENT NUMBER:");
  console.log(CurrentNumber);
  console.log("LAST NUMBER:");
  console.log(LastNumber);
  console.log("------------------------------");
}
