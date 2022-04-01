let total = 0

document.querySelector('#pumpkin').addEventListener('click', zero);
document.querySelector('#dominosPizza').addEventListener('click', three);
document.querySelector('#zebra').addEventListener('click', nine);
document.querySelector('#cantThinkOfAnything').addEventListener('click', two);
document.querySelector('#homework').addEventListener('click', ten);

function zero() {
  total = total * 0;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
function three() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
function nine() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
function two() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerText = total;
}
function ten() {
  total = total + 10;
  document.querySelector("#placeToPutResult").innerHTML = total;
}