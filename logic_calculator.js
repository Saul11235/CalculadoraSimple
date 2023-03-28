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
  } else if (code == "=") {
    EQUAL_BUTTON();
  }


} 

function numberkeyAction(number) {
  if ((number == 0 && CurrentNumber != "" || number != 0)
     && CurrentNumber.length < 14 )  {
    console.log(typeof number);
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
  CurrentSymbol = Symbol_input;
  LastNumber = 0;
  if (CurrentNumber.indexOf(".") == -1) {
    LastNumber = CurrentNumber.parseInt(CurrentNumber);
  } else if (CurrentNumber == "")  {
    LastNumber = 0;
  } else {
    LastNumber = CurrentNumber.parseFloat(CurrentNumber);
  } 
  CurrentNumber = String();
  toScreen(CurrentSymbol,"0")
}


function EQUAL_BUTTON() {
  console.log("------------------------------")
  console.log("CURRENT SYMBOL:")
  console.log(CurrentSymbol);
  console.log("CURRENT NUMBER:")
  console.log(CurrentNumber);
  console.log("LAST SYMBOL:")
  console.log(LastNumber);
  console.log("------------------------------")
}
