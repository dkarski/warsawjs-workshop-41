(function(){
  const paragraphElement = document.getElementById("paragraph");
  const inputAElement = document.getElementById("inputA");
  const inputBElement = document.getElementById("inputB");
  const buttonElement = document.getElementById("button");

  let numberA = 0;
  let numberB = 0;

  function sum(a, b){
    return a + b;
  }

  function handleAInputChange(event){
    numberA = +event.target.value; // dla lepszej czytelności zalecane: Number()
  }

  function handleBInputChange(event){
    numberB = +event.target.value; // Number()
  }

  function handleButtonClick(){
    const sumNumber = sum(numberA, numberB);
    paragraphElement.innerText = `Suma: ${sumNumber}`
  }

  inputAElement.addEventListener('change',handleAInputChange);
  inputBElement.addEventListener('change',handleBInputChange);
  buttonElement.addEventListener('click',handleButtonClick);
})();
