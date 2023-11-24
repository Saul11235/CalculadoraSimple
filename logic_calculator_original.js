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
  CurrentSymbol = Symbol_input;
  toScreen(CurrentSymbol,"0");
}

function EQUAL_BUTTON() {
  var num1 = LastNumber;
  var num2 = 0;
  /*---------*/
  if (CurrentNumber == "" ) {
    num2 = 0;
  } else if (CurrentNumber.indexOf(".") == -1)  {
    num2 = parseInt(CurrentNumber);
  } else {
    num2 = parseFloat(CurrentNumber);
  }
  /*---------*/
  if (CurrentSymbol == "") {
    LastNumber = num2;
    CurrentNumber = "";
    toScreen ("","0");
  } else if (CurrentSymbol == "+") {
    LastNumber = num1+num2;
    var resp=num1+num2;
    CurrentNumber="";
    CurrentSymbol="";
    toScreen("",resp);
  } else if (CurrentSymbol == "-") {
    LastNumber = num1-num2;
    var resp=num1-num2;
    CurrentNumber="";
    CurrentSymbol="";
    toScreen("",resp);
  } else if (CurrentSymbol == "*") {
    LastNumber = num1*num2;
    var resp=num1*num2;
    CurrentNumber="";
    CurrentSymbol="";
    toScreen("",resp);
  } else if (CurrentSymbol =="/" && num2 ==0 ) {
    LastNumber = 0;
    CurrentNumber = "";
    CurrentSymbol = "";
    toScreen("!","Error div 0")
  } else if (CurrentSymbol =="/" && num2 !=0 ) {
    LastNumber = num1/num2;
    var resp=num1/num2;
    CurrentNumber="";
    CurrentSymbol="";
    toScreen("",resp);
  }
}
