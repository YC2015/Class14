


function inchesToCentimeters(value){
  var newValueInCm = parseFloat(value) * (2.54 / 1);
  return newValueInCm.toFixed(3);
}

inchesToCentimeters();

function cmToInches(value){
  var newValueInIn = parseFloat(value) * (1 / 2.54);
  return newValueInIn.toFixed(3);
}

cmToInches();
