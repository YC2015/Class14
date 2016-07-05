// array of conversion functions ///////////////////////////////////////
var functionsArray = [
  inchesToCentimeters,
  cmToInches,
  fluidOuncesToMl,
  mlToFluidOunces,
  miToKm,
  kmToMi,
  lbsToKg,
  kgToLbs
];

/////Conversion Functions///////////////////////////////////////////////////////////////////////////////////

function inchesToCentimeters(value){
  var newValueInCm = parseFloat((value) * (2.54 / 1)).toFixed(3);
  console.log(newValueInCm);
}

function cmToInches(value){
  var newValueInIn = parseFloat((value) * (1 / 2.54)).toFixed(3);
  console.log(newValueInIn);
}

  //Fluid Onces and Milliliters
function fluidOuncesToMl(value){
  var newValueInMl = parseFloat((value) * (29.5735 / 1)).toFixed(3);
  console.log(newValueInMl);
}

function mlToFluidOunces(value){
  var newValueInFluidOnces = parseFloat((value) * (1 / 29.5735)).toFixed(3);
  console.log(newValueInFluidOnces);
}

  //Miles to Kilometers
function miToKm(value){
  var newValueInKm = parseFloat((value) * (1.60934 / 1)).toFixed(3);
  console.log(newValueInKm);
}

function kmToMi(value){
  var newValueInMi = parseFloat((value) * (1 / 1.60934)).toFixed(3);
  console.log(newValueInMi);
}

  // Pounds to Kilograms
function lbsToKg(value){
  var newValueInKg = parseFloat((value) * (0.453592 / 1 )).toFixed(3);
  console.log(newValueInKg);
}

function kgToLbs(value){
  var newValueInLbs = parseFloat((value) * (1 / 0.453592)).toFixed(3);
  console.log(newValueInLbs);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function performConversion(){
  // get value of user input
  var value = document.getElementById('input').value;
  // get value of seleced option
  var e = document.getElementById('selections');
  var strUser = e.selectedIndex;

  functionsArray[strUser](value);
}

var button = document.getElementById('submit');
button.addEventListener('click', performConversion);
