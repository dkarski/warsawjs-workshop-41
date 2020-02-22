let numberA;
let numberB;

function sum(a, b){
  return a + b;
}

function handleAInputChange(target){
  numberA = target.value;
}

function handleBInputChange(target){
  numberB = target.value;
}

function handleButtonClick(){
  const sumNumber = sum(numberA, numberB);
  console.log(sumNumber);
}
