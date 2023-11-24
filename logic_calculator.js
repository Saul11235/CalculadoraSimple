/*logic calculator for simple calc*/


function toScreen(symbol,numbers) {
  var symbolhtml= document.getElementById("symbol");
  symbolhtml.innerHTML = symbol;
  var numberhtml= document.getElementById("numbers");
  numberhtml.innerHTML = numbers;
}

class logic_calulator {

  constructor() {
    this.number1=0; // firts on list
    this.number2=0;
    this.string="";
  }

  action_symbol(simbol) {
    toScreen(simbol,simbol);
  }
}

var calc = logic_calulator()

function key(symbol) {
  calc.action_symbol(symbol);
}



