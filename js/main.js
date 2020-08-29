var _totalPA1;

function acreturnPA() {
  var monthSelection = Number(document.getElementById("period").value);

  console.log(monthSelection);
  switch (monthSelection) {
    case 1:
      var _rPA1 = 1 * 10;
      var _bPA1 = 1 * 2.5;
      _totalPA1 = _rPA1 + _bPA1;
      document.getElementById("return_pa").innerHTML = "+" + _rPA1 + "%";
      document.getElementById("bonus").innerHTML = "+" + _bPA1 + "%";
      break;
    case 2:
      var _rPA2 = 1 * 15;
      var _bPA2 = 1 * 5;
      var _totalPA2 = _rPA2 + _bPA2;
      document.getElementById("return_pa").innerHTML = "+" + _rPA2 + "%";
      document.getElementById("bonus").innerHTML = "+" + _bPA2 + "%";
      break;

    default:
      var _rPA3 = 1 * 22;
      var _bPA3 = 1 * 10;
      var _totalPA3 = _rPA3 + _bPA3;
      document.getElementById("return_pa").innerHTML = "+" + _rPA3 + "%";
      document.getElementById("bonus").innerHTML = "+" + _bPA3 + "%";
      break;
  }
}

function calculateMonthProfit() {
  const inputUser = Number(document.getElementById("token_allocate").value);
  var _3monSimple = Number((inputUser / 100) * 12.5);
  var _6monSimple = Number((inputUser / 100) * 20);
  var _12monSimple = Number((inputUser / 100) * 32);
  var _3monTotal = Number(inputUser + _3monSimple);
  var _6monTotal = Number(inputUser + _6monSimple);
  var _12monTotal = Number(inputUser + _12monSimple);
  document.getElementById("_3monSimple").innerHTML = _3monSimple.toFixed(2);
  document.getElementById("_6monSimple").innerHTML = _6monSimple.toFixed(2);
  document.getElementById("_12monSimple").innerHTML = _12monSimple.toFixed(2);
  document.getElementById("_3monTotal").innerHTML = _3monTotal.toFixed(2);
  document.getElementById("_6monTotal").innerHTML = _6monTotal.toFixed(2);
  document.getElementById("_12monTotal").innerHTML = _12monTotal.toFixed(2);
}

// function diaCal() {
//   var diaAmount = document.getElementById("token_allocate").value;
//   if (monthSelection == 1) {
//     var _totalDiaPercentage = _totalPA1 + 100;
//   }
// }
