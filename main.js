const paragraphElement = document.getElementById("paragraph");
let numberA = 0;
let numberB = 0;

function sum(a, b){
  return a + b;
}

function handleAInputChange(target){
  numberA = +target.value; // dla lepszej czytelności zalecane: Number()
}

function handleBInputChange(target){
  numberB = +target.value; // Number()
}

function handleButtonClick(){
  const sumNumber = sum(numberA, numberB);
  paragraphElement.innerText = `Suma: ${sumNumber}`
}
