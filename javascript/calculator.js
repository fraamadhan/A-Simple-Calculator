document.getElementById("sum").addEventListener("click", summary);
document.getElementById("sub").addEventListener("click", substract);
document.getElementById("multi").addEventListener("click", multi);
document.getElementById("div").addEventListener("click", division);

function summary() {
  let a = parseFloat(document.getElementById("num").value);
  let b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a + b;
}
function substract() {
  let a = parseFloat(document.getElementById("num").value);
  let b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a - b;
}
function multi() {
  let a = parseFloat(document.getElementById("num").value);
  let b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a * b;
}
function division() {
  let a = parseFloat(document.getElementById("num").value);
  let b = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").value = a / b;
}
