//Conversion Functions

function inchesToCentimeters(value){
  var newValueInCm = parseFloat(value) * (2.54 / 1);
  console.log(newValueInCm);
  return newValueInCm.toFixed(3);
}

function cmToInches(value){
  var newValueInIn = parseFloat(value) * (1 / 2.54);
  return newValueInIn.toFixed(3);
  console.log(newValueInIn);
}

  //Fluid Onces and Milliliters
function fluidOncesToMl(value){
  var newValueInMl = parseFloat(value) * (29.5735 / 1);
  return newValueInMl.toFixed(3);
}

function mlToFluidOnces(value){
  var newValueInFluidOnces = parseFloat(value) * (1 / 29.5735);
  return newValueInFluidOnces.toFixed(3);
}

  //Miles to Kilometers
function miToKm(){
  var newValueInKm = parseFloat(value) * (1.60934 / 1);
  return newValueInKm.toFixed(3);
}

function kmToMi(){
  var newValueInMi = parseFloat(value) * (1 / 1.60934);
  return newValueInMi.toFixed(3);
}

  // Pounds to Kilograms
function lbsToKg(){
  var newValueInKg = parseFloat(value) * (0.453592 / 1 );
  return newValueInKg.toFixed(3);
}

function kgToLbs(){
  var newValueInLbs = parseFloat(value) * (1 / 0.453592);
  return newValueInLbs.toFixed(3);
}

function performConversion(){

  var value = document.getElementById('input').value;
  //Inches and Centimeters
  var inches = document.getElementById('inches');
  var cent = document.getElementById('centimeters');

  if (inches.selected) {
    inchesToCentimeters(value);
  } else if (cent.selected) {
    cmToInches(value);
  }
}

var button = document.getElementById('submit');
button.addEventListener('submit', performConversion);
