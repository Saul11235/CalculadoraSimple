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
    actionPLUS();
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

function set_lastNumber() {
  LastNumber = 0;
  if (CurrentNumber.indexOf(".") == -1) {
    LastNumber = CurrentNumber.parseInt(CurrentNumber);
  } else {
    LastNumber = CurrentNumber.parseFloat(CurrentNumber);
  } 
  CurrentNumber="";
  var numberhtml= document.getElementById("numbers");
  numberhtml.innerHTML = "0";
  var symbolhtml= document.getElementById("symbol");
  symbolhtml.innerHTML = CurrentSymbol;
}

function actionPLUS() {
  CurrentSymbol="+";
  set_lastNumber();
}


